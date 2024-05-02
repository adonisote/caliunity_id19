//Disclaimer: Used mainly ChatGPT here

// In a JavaScript file that runs on the client-side, such as `public/js/auth.js`
const storeToken = (token) => {
  localStorage.setItem('jwtToken', token);  // Store the token in localStorage
};

const retrieveToken = () => {
  return localStorage.getItem('jwtToken');  // Retrieve the stored token
};

// Store the token and redirect to the personal records endpoint
const handleLogin = (token) => {
  storeToken(token);  // Store the token
  window.location.href = "/api/records/personal";  // Redirect to a secured endpoint
};