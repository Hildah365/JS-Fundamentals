function add(a, b) {
    return a + b;
}   

const numb1 = parseInt(process.argv[2]);
const numb2 = parseInt(process.argv[3]);    

console.log(add(numb1, numb2));
