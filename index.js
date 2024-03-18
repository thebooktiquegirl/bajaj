// index.js

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Route
app.post("/bfhl", (req, res) => {
  try {
    // Extracting data from the request body
    const { array } = req.body;

    // Validate if the request contains the array
    if (!array || !Array.isArray(array)) {
      return res
        .status(400)
        .json({ is_success: false, error: "Array is missing or invalid" });
    }

    // Extracting required information for the response
    const user_id = "your_name_dob"; // Replace 'your_name_dob' with your actual name and date of birth
    const evenNumbers = array.filter((num) => num % 2 === 0);
    const oddNumbers = array.filter((num) => num % 2 !== 0);
    const alphabets = array
      .filter((char) => typeof char === "string" && char.match(/[a-zA-Z]/))
      .map((char) => char.toUpperCase());

    // Constructing the response object
    const response = {
      is_success: true,
      user_id,
      email_id: "your_email@example.com", // Replace with your email
      college_roll_number: "12345", // Replace with your college roll number
      even_numbers: evenNumbers,
      odd_numbers: oddNumbers,
      alphabets: alphabets,
    };

    // Sending the response
    res.json(response);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ is_success: false, error: "Internal server error" });
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
