let re;

re = /hello/;

console.log(re);
console.log(re.source);

//exec() - Return result in an array or null
//finds the place of something youre searching for..
//looks for a match to the definition of re variable
const result = re.exec('hello world');