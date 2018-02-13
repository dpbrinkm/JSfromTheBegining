class Github{
  constructor(){
    this.client_id ='d043ccbd3c9a10d64471';
    this.client_secret= '4bf01aa3c51458a000b7a36592ce9536e39e4c77';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile 
    }
  }
}