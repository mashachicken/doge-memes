export default class AnimalMemes {
  async getAnimals() {
    try {
      let response = await fetch(`http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("there was an error with your request:" + error.message);
      return false;
    }
  }
}
