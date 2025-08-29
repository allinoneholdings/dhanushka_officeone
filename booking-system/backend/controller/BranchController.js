import db from "../config/db.js";

export const createBranch = async (req, res) => {
  try {
    // First check if branch already exists
    const checkQuery = "SELECT * FROM branch WHERE branchName = ? OR emailAddress = ?";
    
    db.query(checkQuery, [req.body.branchName, req.body.emailAddress], (checkErr, checkResult) => {
      if (checkErr) {
        console.log("Database Error:", checkErr);
        return res.status(500).json({ errorMessage: "Database error while checking branch" });
      }
      
      if (checkResult.length > 0) {
        return res.status(400).json({ message: "Branch with this name or email already exists" });
      }
      
      // If branch doesn't exist, create it
      const insertQuery = "INSERT INTO branch(branchName,contactNumber,superAdminIdFk,emailAddress,address,state,city) VALUES(?,?,?,?,?,?,?)";
      
      db.query(
        insertQuery,
        [req.body.branchName, req.body.contactNumber, req.body.superAdminIdFk, req.body.emailAddress, req.body.address, req.body.state, req.body.city],
        (err, result) => {
          if (err) {
            console.log("Database Error:", err);
            return res.status(500).json({ errorMessage: "Database error while creating branch" });
          } else {
            console.log("Branch created successfully");
            return res.status(200).json({ 
              message: "Branch created successfully",
              branchId: result.insertId
            });
          }
        }
      );
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const SearchBranch = async (req, res) => {
    try {
        const searchTerm = req.query.branchName || req.body.branchName || '';
        const q = "SELECT branchId, branchName FROM branch WHERE branchName LIKE ?";
        
        db.query(q, [`%${searchTerm}%`], (err, result) => {
            if (err) {
                console.log("Database Error:", err);
                return res.status(500).json({ errorMessage: "Database error" });
            } else {
                return res.status(200).json({ 
                    message: "Branches retrieved successfully",
                    branches: result
                });
            }
        });
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};