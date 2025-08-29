import db from "../config/db.js";

export const createPackage = async (req, res) => {
  try {
    // First check if package already exists
    const checkQuery = "SELECT * FROM package WHERE packageName = ?";
    
    db.query(checkQuery, [req.body.branchName, req.body.emailAddress], (checkErr, checkResult) => {
      if (checkErr) {
        console.log("Database Error:", checkErr);
        return res.status(500).json({ errorMessage: "Database error while checking branch" });
      }
      
      if (checkResult.length > 0) {
        return res.status(400).json({ message: "Branch with this name or email already exists" });
      }

      // If package doesn't exist, create it
      const insertQuery = "INSERT INTO package(packageName,price,style,Facilitie) VALUES(?,?,?,?)";

      db.query(
        insertQuery,
        [req.body.packageName, req.body.price, req.body.style, req.body.Facilitie],
        (err, result) => {
          if (err) {
            console.log("Database Error:", err);
            return res.status(500).json({ errorMessage: "Database error while creating package" });
          } else {
            console.log("Package created successfully");
            return res.status(200).json({
              message: "Package created successfully",
              packageId: result.insertId
            });
          }
        }
      );
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const createBranchPackage = async (req, res) => {
  try {
    // First check if package already exists
    const checkQuery = "SELECT * FROM branchpackages WHERE BranchId = ? or PackageId= ?";
    
    db.query(checkQuery, [req.body.branchId, req.body.packageId], (checkErr, checkResult) => {
      if (checkErr) {
        console.log("Database Error:", checkErr);
        return res.status(500).json({ errorMessage: "Database error while checking branch" });
      }
      
      if (checkResult.length > 0) {
        return res.status(400).json({ message: "This Package Already this branch exists" });
      }

      // If package doesn't exist, create it
      const insertQuery = "insert into branchpackages(BranchId,PackageId) values(?,?);";

      db.query(
        insertQuery,
        [req.body.branchId, req.body.packageId],
        (err, result) => {
          if (err) {
            console.log("Database Error:", err);
            return res.status(500).json({ errorMessage: "Database error while creating package" });
          } else {
            console.log("Package created successfully");
            return res.status(200).json({
              message: "Package created successfully",
              PackageId: req.body.packageId,
              BranchId: req.body.branchId
            });
          }
        }
      );
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const SearchPackage = async (req, res) => {
    try {
        const searchTerm = (req.body && req.body.packageName) || (req.query && req.query.packageName) || '';
        const q = "SELECT packageId, packageName FROM package WHERE packageName LIKE ?";
        
        db.query(q, [`%${searchTerm}%`], (err, result) => {
            if (err) {
                console.log("Database Error:", err);
                return res.status(500).json({ errorMessage: "Database error" });
            } else {
                return res.status(200).json({ 
                    message: "Package retrieved successfully",
                    packages: result
                });
            }
        });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};