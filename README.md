# Weather-Gather

Weather-Gather is a weather application built with React, TypeScript, and Vite. It provides current weather information, forecasts, and other weather-related data for a given location. The application features a dynamic background video that changes based on the current weather conditions.

# Demo

Check out the live demo of the application [here](https://weather-gather.onrender.com).

## Features

- Current weather information
- 7-day weather forecast
- Hourly weather chart
- Dynamic background video based on weather conditions
- Location search with autocomplete
- Responsive design

## Technologies Used

- React
- TypeScript
- Vite
- Material-UI
- Axios
- React Router
- Recharts
- Emotion (CSS-in-JS)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/furkandur/weather-gather
   cd weather-gather
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:

   ```env
   VITE_WEATHER_API_KEY=your_weather_api_key
   VITE_IPDATA_API_KEY=your_ipdata_api_key
   ```

### Running the Application

To start the development server, run:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building the Application

To build the application for production, run:

```sh
npm run build
```

The built files will be in the `dist` directory.

### Linting

To lint the code, run:

```sh
npm run lint
```

## Project Structure

```
.env
.gitignore
.prettierrc.json
eslint.config.js
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite-env.d.ts
vite.config.ts
public/
  favicon.ico
  videos/
    cloudy.mp4
    foggy.mp4
    heavy_rain.mp4
    heavy_snow.mp4
    light_rain.mp4
    light_snow.mp4
    overcast.mp4
    sunny.mp4
src/
  App.tsx
  constants.ts
  index.css
  main.tsx
  Theme.ts
  types.ts
  components/
    BackgroundVideo.tsx
    CurrentWeather.tsx
    DailyTemp.tsx
    Forecast.tsx
    HourlyChart.tsx
    Navigation.tsx
    SearchBar.tsx
    WeatherLocation.tsx
  pages/
    HomePage.tsx
  services/
    ipdata.ts
    locator.ts
    weather.ts
```
