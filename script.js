// Handle Login
function handleLogin(event) {
  event.preventDefault();

  const unit = document.getElementById('unit').value;
  const password = document.getElementById('password').value;

  if (password === "yourpassword") {  // Replace with your actual password check
    document.getElementById('loginPage').style.display = "none";
    document.getElementById('dataPage').style.display = "block";
    document.getElementById('unitNameDisplay').innerText = Logged in as: ${unit};
  } else {
    alert('Invalid password!');
  }
}

// Handle Form Submission
function handleSubmit(event) {
  event.preventDefault();

  const totalStaff = document.getElementById('totalStaff').value;
  const absentStaff = document.getElementById('absentStaff').value;
  const reason = document.getElementById('reason').value;

  // Calculate present staff
  const presentStaff = totalStaff - absentStaff;
  const unit = document.getElementById('unit').value;

  const data = {
    unit: unit,
    totalStaff: totalStaff,
    absentStaff: absentStaff,
    presentStaff: presentStaff,
    reason: reason,
  };

  // Submit data to Google Sheets (Google Sheets API integration required)
  submitToGoogleSheets(data);

  // Show a success message
  alert("Data Submitted Successfully!");
}

// Function to Submit Data to Google Sheets (Using Google Sheets API)
function submitToGoogleSheets(data) {
  // Google Sheets API code would go here
  // You will need to authenticate and set up Google Sheets API
  // Here's a simple placeholder:
  console.log("Submitting data to Google Sheets...");
  console.log(data);
}
