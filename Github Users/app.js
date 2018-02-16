//Init GitHUb
const github = new Github;

//UI CLass
const ui = new UI

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
     if(data.profile.message === 'Not Found'){
        //show alert
        ui.showAlert('User Not Found', 'alert alert-danger');
     }else{
      //show profile
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
     }
    })
  }else{
    //clear profile
    ui.clearProfile();
  }
});
