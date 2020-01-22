# Udacity React Nanodegree: MyReads Project

MyReads is the first project built during completion of the [Udacity's](https://www.udacity.com/) [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019). The project was built with the [starter template](https://github.com/udacity/reactnd-project-myreads-starter) provided by Udacity.

It is a simple client web app that displays books organized in shelfs. It also alows user to reorganize books in sheves. It has only two pages, `/` and `/search`. Everything else is redirected to root page (`/`). Some of the React comopnents are extracted from the original code in order to make reusable components. Routing is done with `reaact-router` and `debounce` is used to delay search requests until user is done typiing.

## Develop (or review project)

The prefered way to work with the project is `yarn`, although `npm` will work too:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Available commands

* `yarn start` - start the development server
* `yarn build` - build the prodaction version of the app
* `yarn test` - run react tests

## Backend Server

Backend server is provided by Udacity. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend. See [original project](https://github.com/udacity/reactnd-project-myreads-starter) for more details.


## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

If you are interested in contriburing, please visit the [original project](https://github.com/udacity/reactnd-project-myreads-starter).

## License

The [original project](https://github.com/udacity/reactnd-project-myreads-starter) has no license. According to [GitHub's licensing help page](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository#choosing-the-right-license):

```
You're under no obligation to choose a license. However, without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work. If you're creating an open source project, we strongly encourage you to include an open source license. The Open Source Guide provides additional guidance on choosing the correct license for your project.

Note: If you publish your source code in a public repository on GitHub, according to the Terms of Service, other GitHub users have the right to view and fork your repository within the GitHub site. If you have already created a public repository and no longer want users to have access to it, you can make your repository private. When you convert a public repository to a private repository, existing forks or local copies created by other users will still exist.
```

I am not sure what are implications of this, but I have included [MIT License](LICENSE.md) that should apply to the changes I have made.
