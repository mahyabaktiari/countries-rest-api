# Countries REST API

Countries REST API developed by `ReactJs` library that by using it you can get all countries from all over the world (by using `https://restcountries.com/#api-endpoints-v2` API endpoint), search a certain country, view details of it and filter countries by region filter.


## Install and Run scripts:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Used Library
- [axios](https://axios-http.com/): used for make XMLHttpRequests from the browser.
- [react-router-dom](https://reactrouter.com/en/v6.3.0): used for implement routing in project.
- [styled-components](https://styled-components.com/): used for implementing styles.
- [font-awesome](https://fontawesome.com/): used for apply font icons.


## Features
- Fetch all countries by using API endpoint that explained above.
- Search a country by using apart or whole of `country name`.
- Filter countries by using `region`.
- Show details of every country by clicking on country item.
- Ability show details of border's country.
- Implement `Lazy Loading` on load more countries by scrolling.
- Implement Back functionality to previous url.
- Toggle Theme of project to Dark or Light (by using Context API)
- You will view it on both mobile and desktop screens.

## Structure
<pre>
|- public
|- src
  |- components
  |- context
  |- pages
  |- routes
</pre>