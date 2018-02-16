class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
    <div class = "card car-body mb-3">
    <div class= "row">
    <div class = "col-md-3 mt-5">
      <img class = "img-fluid mb-2" src="${user.avatar_url}">
      <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-3"> View Profile</a>
    </div>
    <div class = "col-md-9 mt-3 mb-2">
      <span class= "badge badge-primary">Public Repo: ${user.public_repo}</span>
      <span class= "badge badge-secondary">Public Gists: ${user.public_gists}</span>
      <span class= "badge badge-success">Followers: ${user.followers}</span>
      <span class= "badge badge-info">Following: ${user.following}</span>
      <br><br>
      <ul class ="list-group">
        <li class="list-group-item">Company: ${user.company}</li>
        <li class="list-group-item">Blog: ${user.blog}</li>
        <li class="list-group-item">Location: ${user.location}</li>
        <li class="list-group-item">Member Since: ${user.created_at}</li>
      </ul>
    </div>
    </div>
    </div>
    <h3 class = "page-heading mb-3">Latest Repos</h3>
    <div id= "repos"></div>
    `;
  }

  //show alert msg
  showAlert(message, className){
    //clear remaining alerts
    this.clearAlert();
    //create div 
    const div = document.createElement('div');
    //class name 
    div.className = className;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('.searchContainer');
    //get search box
    const search = document.querySelector('.search');
    //insert alert)
    container.insertBefore(div, search);
    //timeout after 3 seconds
    setTimeout(()=>{
      this.clearAlert();
    }, 2000);

  }

  //show repos
  showRepos(repos){
    let output = '';
    repos.forEach(function(repo){
      output += 
        `<div class = "card card-body mb-2">
          <div class = "row">
            <div class = "col-md-6">
              <a href="${repo.html_url}" target = "_blank"> ${repo.name}</a>
            </div>
            <div class = "col-md-6">
            <span class= "badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class= "badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class= "badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>`
    });

    //output repo
    document.getElementById('repos').innerHTML = output;
  }
  //a;ert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }
  //clear card
  clearProfile(){
    this.profile.innerHTML ="";
  }
}