# Awesome Breweries

Looking for breweries? Look no further! Awesome Breweries is a React app that fetches and displays brewery companies from the given API endpoint. It also allows you to search for breweries by name.

More search and filter functionality is coming soon!

# See it live
Awesome Brewery is delpyed on Vercel. [Click here to see it live](https://awesome-brewery.vercel.app/)

# How does it work?

## Stack
It is build with React, TypeScript and Material UI. It uses `react-router-dom` for routing and `axios` for fetching data from the API.

## Data
Data is fetched from open brewery database, [https://www.openbrewerydb.org/documentation](https://www.openbrewerydb.org/documentation).
The db also provides endpoint for search by name, and other queries.

# Projects Highlights

### Created a custom hook for data fetching
`useFetch()` is a custom hook that fetches data from the given endpoint. It also handles loading and error states.

### Search functionality
The search functionality is implemented using `useDebounce` hook. It debounces the search input and fetches data only after the user has stopped typing for a certain amount of time.



## Disclaimer
This project is created for educational purposes only. It is not intended for commercial use.
It is part of the [Integrify Finland Full stack web development program](https://www.integrify.io/) and is created and instructed by Anh Nguyen. Big thanks to her and the Integrify team for the support and guidance.