const data = [
  {
    name: 'Sammy Smith',
    age: 24,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'Los Angeles CA',
    img: "https://randomuser.me/api/portraits/med/men/80.jpg"
  },
  {
    name: 'Christina Perez',
    age: 29,
    gender: 'Female',
    lookingFor: 'Female',
    location: 'Austin TX',
    img: "https://randomuser.me/api/portraits/med/female/80.jpg"
  },
  {
  name: 'Joe Blow',
  age: 30,
  gender: 'Male',
  lookingFor: 'Female',
  location: 'Portland OR',
  img: "https://randomuser.me/api/portraits/med/men/24.jpg"
  }
];
//load profile on page load
nextProfile();

const profiles = profileIterator(data);
document.getElementById('next').addEventListener('click', nextProfile());

function nextProfile(){
 const currentProfile = profiles.next().value;
if(currentProfile !== undefined){
  document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class ="list-group-item">Name: ${currentProfile.name}</li>
      <li class ="list-group-item">Age: ${currentProfile.age}</li>
      <li class ="list-group-item">Location: ${currentProfile.location}</li>
      <li class ="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    </ul>
  `;

  //img display
  document.getElementById('imgDisplay').innerHTML = `<img src=${currentProfile.img}`;
  }else{
    //reload page from begining
    window.location.reload();
  }
}
// create iterator 
function profileIterator(profiles){
  let nextIndex = 0;

  return {
    next: function (){
      return nextIndex < profile.length ?
      {value: profiles[nextIndex++], done: false }:
      {done: true}
    }
  }
}