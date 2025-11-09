// Get the first argument passed by the user
const arg = process.argv[2];

// Convert argument to integer using parseInt
const number = parseInt(arg, 10);

// Check if the conversion is a number
if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log("Not a number");
}
