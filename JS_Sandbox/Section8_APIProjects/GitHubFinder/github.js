class GitHub {
  constructor() {
    this.client_id = "cc6f1dbf6734097eb9d2";
    this.client_secret = "4c01011558ea8d14fe0c29c7a8d71a9495bbb1f6";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile, // Same as saying profile: profile
    };
  }
}
