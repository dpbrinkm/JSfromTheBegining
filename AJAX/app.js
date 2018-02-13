const http = new EasyHTTP;

//Get Users

// http.get()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//user data 

const data = {
  name: 'jon doe',
  username: 'jonDoe',
  email: 'jdoe@gmail.com'
}

http.post('url', data)
  .then(data => console.log(data))
  .catch(err => console.log(err))
  