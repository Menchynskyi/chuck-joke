# Chuck Joke App
Web app for getting jokes about Chuck Norris.

**Links** to the working application:
* [chuck-joke.netlify.app](https://chuck-joke.netlify.app/)
* [chuck-joke-app.herokuapp.com](https://chuck-joke-app.herokuapp.com/)
***

## About App

Uses **[Chuck Norris API](https://api.chucknorris.io/)** to get jokes in JSON format.

**Available features:**
* Ability to get a random joke.
* Ability to get a random joke from categories (Uses API to get all available categories).
* Ability to get jokes by free text search.
* Any joke can be marked/unmarked as favourite.
* Jokes marked as favourite appear in the right section Favourite.
* Favourite jokes are available after reloading the page and stored in the browser.
* Favourite jokes are visible in search result.

Also there are *mobile* and *tablet* views.
***

## To run locally
1. Make sure you have [Git](https://git-scm.com/) and [Node](https://nodejs.org/en/) installed on your computer.
2. Clone the repository.
```shell
git clone https://github.com/Menchynskyi/chuck-joke.git
```
3. Install dependencies with `npm install` or `yarn install` if you're using yarn.

4. Run the development server with `npm start` or `yarn start`.