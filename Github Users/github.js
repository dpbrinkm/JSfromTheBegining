class Github{
  constructor(){
    this.client_id ='d043ccbd3c9a10d64471';
    this.client_secret= '4bf01aa3c51458a000b7a36592ce9536e39e4c77';
    this.repos_count = 10;
    this.repos_sort = 'created asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sorts=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos 
    }
     
  }
}