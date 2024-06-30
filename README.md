# Dashboard Application

This is a Dashboard application built using React.js and Material UI. The dashboard includes various UI components, a chart to display price of categories, Google Maps integration, and functionality to fetch and display data from an API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Create config file](#create-config-file) 
- [Installation](#installation)
- [Usage](#usage)


## Features

- Dashboard page designed using Material UI components.
- Integration with Google Maps, displaying markers in SVG format.
- Implemented chart using APEXCHARTS.
- Fetching data from an API and displaying it in a paginated table.
- Search functionality for the table.
- Ability to select rows and display selected records.
- Deletion of rows from the table.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Create config.js file (instead of .env file)

1. Create config.js file:
   ```sh
   const env={
   GOOGLE_MAPS_API_KEY:"YOUR_GOOGLE_MAPS_API_KEY",
   API_URL:"URL to fetch fakestoreapi"}
   export default env


### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/deepakkmayur/InfoTrack-Dashboard.git
  
