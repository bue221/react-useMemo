class Api {
  constructor() {
    this.urlBase = "https://jsonplaceholder.typicode.com/";
  }

  async getPost() {
    const res = await fetch(this.urlBase + "posts/1");
    const post = await res.json();
    return post;
  }
}

export default Api;
