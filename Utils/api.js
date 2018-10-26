const api = {
    async getBio(username) {
        username = username.toLowerCase().trim();
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url);
        return response.json();
    },

    async getRepos(username) {
        username = username.toLowerCase().trim();
        const url = `https://api.github.com/users/${username}/repos`
        const response = await fetch(url);
        return response.json();
    }
}

module.exports = api;
