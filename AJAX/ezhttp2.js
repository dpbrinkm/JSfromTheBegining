class EasyHTTP {
  //make http get request
  get(url, data){
    return new Promise((resolve, reject) => {

      fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => err);
    });  
  }

  //make http post request 
  post(url, data){
    return new Promise((resolve, reject) => {

      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'apllication/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });  
  }
  put(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'apllication/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });  
  }

  //make HTTP Delete request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'apllication/json'
        }
      })
      .then(res => res.json())
      .then(() => resolve('resource gone'))
      .catch(err => reject(err));
    });  
  }
} 