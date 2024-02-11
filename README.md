# Awesome Breweries

Looking for breweries? Look no further! Awesome Breweries is a React app that fetches and displays brewery companies from the given API endpoint. It also allows you to search for breweries by name, and filter breweries by the state it's in.

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

### Filter by states with autocomplete
The app uses Material UI's `Autocomplete` component to filter breweries by state. The selected state then triggers a refetch of data from the API and displays the breweries from the selected state.

### Routing
The app uses `react-router-dom` for routing. It implements dynamic routing to display each brewery's details.

### Error handling
It handles errors from the API with customized Error class and displays a message to the user.

### Contact form
It leverages `react-hook-form` and `yup` to create a contact form. The form is not yet connected to a backend, but it is fully functional and validates the input.


## Disclaimer & Acknowledgements
This project is created for educational purposes only. It is not intended for commercial use.
It is part of the [Integrify Finland Full stack web development program](https://www.integrify.io/) and is created and instructed by Anh Nguyen. Big thanks to her and the Integrify team for the support and guidance.