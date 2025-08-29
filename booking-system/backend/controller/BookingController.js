import db from "../config/db.js";


export const createBooking = async (req, res) => {
  try {
    // Format dates to proper YYYY-MM-DD format
    const formatDate = (dateStr) => {
      if (!dateStr) return null;
      // Handle format like "11-28-2025" to "2025-11-28"
      if (dateStr.length === 10 && dateStr.indexOf('-') === 2) {
        return dateStr.substring(6) + '-' + dateStr.substring(0, 2) + '-' + dateStr.substring(3, 5);
      }
      return dateStr;
    };

    const formattedStartDate = formatDate(req.body.startDate);
    const formattedEndDate = formatDate(req.body.endDate);

    const q = "insert into booking(packageIdFk,customerIdFk,startDate,endDate,Hours,TotalPrice,advancePrice,balance,message) values(?,?,?,?,?,?,?,?,?);";

    db.query(
      q,
      [req.body.packageIdFk, req.body.customerIdFk, formattedStartDate, formattedEndDate, req.body.Hours, req.body.TotalPrice, req.body.advancePrice, req.body.balance, req.body.message],
      (err, result) => {
        if (err) {
          console.log("Database Error:", err);
          return res.status(500).json({ errorMessage: "Database error" });
        } else {
          console.log("Booking created successfully");
          return res.status(200).json({ 
            message: "Booking created successfully",
            bookingId: result.insertId
          });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

