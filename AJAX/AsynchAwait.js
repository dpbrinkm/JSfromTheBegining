
//adding async before the function decleration makes it return a promise
async function myFunc(){
  return 'Hello';

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello'), 1000);
  });
  const res = await promise; //wait til promise is resolved
  return res; 
}

myFunc()
  .then(res = console.log(res)); 