import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// dhanushka - superAdminId
// mahesh - admin kurunagala
// eranga - admin kandy
// password - 1234

export const createSuperAdmin = async (req, res) => {
  try {
    // const { username, password, role } = req.body; 
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const q = "INSERT INTO superadmin(userName,password) VALUES(?,?)";

    db.query(
      q,
      [req.body.username, hashedPassword],
      (err, result) => {
        if (err) {
          console.log("Database Error:", err);
          return res.status(500).json({ errorMessage: "Database error" });
        } else {
          console.log("User created successfully");
          return res.status(200).json({ 
            message: "User created successfully",
            superAdminId: result.insertId
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const createStaff = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const q = "insert into staff(userName,password,branchIdFk,type) values(?,?,?,?)";

    db.query(
      q,
      [req.body.userName, hashedPassword, req.body.branchIdFk, req.body.type],
      (err, result) => {
        if (err) {
          console.log("Database Error:", err);
          return res.status(500).json({ errorMessage: "Database error" });
        } else {
          console.log("User created successfully");
          return res.status(200).json({ 
            message: "User created successfully",
            staffId: result.insertId
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const q = "insert into customer(customerName,emailAddress,password,phoneNumber) values(?,?,?,?)";

    db.query(
      q,
      [req.body.customerName, req.body.emailAddress, hashedPassword, req.body.phoneNumber],
      (err, result) => {
        if (err) {
          console.log("Database Error:", err);
          return res.status(500).json({ errorMessage: "Database error" });
        } else {
          console.log("User created successfully");
          return res.status(200).json({ 
            message: "User created successfully",
            staffId: result.insertId
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Login Methods
export const loginSuperAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    
    if (!userName || !password) {
      return res.status(400).json({ errorMessage: "Username and password are required" });
    }

    const q = "SELECT superAdminId,userName,password FROM superadmin WHERE status='Active' AND userName=?";

    db.query(q, [userName], async (err, result) => {
      if (err) {
        console.log("Database Error:", err);
        return res.status(500).json({ errorMessage: "Database error" });
      }
      
      if (result.length === 0) {
        return res.status(401).json({ errorMessage: "Invalid credentials or inactive account" });
      }

  const user = result[0];
  
  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ errorMessage: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.superAdminId, role: "SuperAdmin" },
      "SECRET_KEY",   // store in .env
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token: token,
      userType: "superAdmin",
      user: {
        superAdminId: user.superAdminId,
        userName: user.userName
      }
    });
  } catch (compareError) {
    console.log("Password comparison error:", compareError);
    return res.status(500).json({ errorMessage: "Authentication error" });
  }
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const loginStaff = async (req, res) => {
  try {
    const { userName, password } = req.body;
    
    if (!userName || !password) {
      return res.status(400).json({ errorMessage: "Username and password are required" });
    }

    const q = "SELECT staffId,userName,password,branchIdFk,branchName FROM staff,branch WHERE staff.status='Active' AND branchIdFk=branchId AND userName=?";

    db.query(q, [userName], async (err, result) => {
      if (err) {
        console.log("Database Error:", err);
        return res.status(500).json({ errorMessage: "Database error" });
      }
      
      if (result.length === 0) {
        return res.status(401).json({ errorMessage: "Invalid credentials or inactive account" });
      }

      const user = result[0];
      
      try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ errorMessage: "Invalid credentials" });
        }

        const token = jwt.sign(
          { id: user.staffId, role: "Staff" },
          "SECRET_KEY",   // store in .env
          { expiresIn: "1h" }
        );

        return res.status(200).json({
          message: "Login successful",
          token: token,
          userType: "staff",
          user: {
            staffId: user.staffId,
            userName: user.userName,
            branchIdFk: user.branchIdFk,
            branchName: user.branchName
          }
        });
      } catch (compareError) {
        console.log("Password comparison error:", compareError);
        return res.status(500).json({ errorMessage: "Authentication error" });
      }
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const loginCustomer = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    
    if (!emailAddress || !password) {
      return res.status(400).json({ errorMessage: "Email address and password are required" });
    }

    const q = "SELECT customerId,customerName,emailAddress,phoneNumber,password FROM customer WHERE status='Active' AND emailAddress=?";

    db.query(q, [emailAddress], async (err, result) => {
      if (err) {
        console.log("Database Error:", err);
        return res.status(500).json({ errorMessage: "Database error" });
      }
      
      if (result.length === 0) {
        return res.status(401).json({ errorMessage: "Invalid credentials or inactive account" });
      }

      const user = result[0];
      
      try {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ errorMessage: "Invalid credentials" });
        }

        const token = jwt.sign(
          { id: user.customerId, role: "Customer" },
          "SECRET_KEY",   // store in .env
          { expiresIn: "1h" }
        );

        return res.status(200).json({
          message: "Login successful",
          token: token,
          userType: "customer",
          user: {
            customerId: user.customerId,
            customerName: user.customerName,
            emailAddress: user.emailAddress,
            phoneNumber: user.phoneNumber
          }
        });
      } catch (compareError) {
        console.log("Password comparison error:", compareError);
        return res.status(500).json({ errorMessage: "Authentication error" });
      }
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};


// Get all users (customers, staff, super admins)
export const getAllUsers = async (req, res) => {
  try {
    const q = `
      SELECT 
          customerId AS userId,
          'Customer' AS userType,
          customerName AS name,
          status,
          created_at
      FROM customer
      UNION ALL
      SELECT 
          staffId AS userId,
          'Staff' AS userType,
          userName AS name,
          status,
          created_at
      FROM staff
      UNION ALL
      SELECT 
          superAdminId AS userId,
          'Super Admin' AS userType,
          userName AS name,
          status,
          created_at
      FROM superadmin
    `;
    db.query(q, [], (err, result) => {
      if (err) {
        console.log("Database Error:", err);
        return res.status(500).json({ errorMessage: "Database error" });
      }
      return res.status(200).json({ users: result });
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

