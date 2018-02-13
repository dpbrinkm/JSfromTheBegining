//Init GitHUb
const github = new Github;

// SEARCH INPUT
const searchUser = document.getElementById('searchUser');

//search input event lister
searchUser.addEventListener('keyup',(e)=>{
  //get text
  const userText = e.target.value;

  if(userText !== ''){
    //make http call
    github.getUser(userText)
    .then(data => {
      console.log(data);
    })
  }
});
