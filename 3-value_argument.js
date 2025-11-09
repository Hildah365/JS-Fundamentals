// Get the first user argument (excluding "node" and script path)
const firstArg = process.argv[2];

if (firstArg === undefined) {
    console.log("No argument");
} else {
    console.log(firstArg);
}
