Certainly! Below is an updated version of the `README.md` that includes **Mapbox** setup instructions instead of Google Maps.

---

# Map-List Toggle App with Mapbox

A simple Angular application that features the ability to toggle between a Map and List view, display markers on the map using **Mapbox**, select filters from a dropdown, choose dates using a date picker, and trigger an export functionality.

## Features

- **Map/List Toggle**: A toggle button to switch between the map view and the list view.
- **Markers on Map**: Displays mock data markers on the map using **Mapbox**.
- **Export Button**: A clickable "Export" button to simulate an export functionality (e.g., console log or alert).
- **Date Picker**: A date picker to select dates.
- **Dropdown Filters**: Dropdown menu to filter data based on mock data options.

## Prerequisites

- **Node.js**: Version 14 or higher.
- **Angular CLI**: Make sure you have Angular CLI installed globally. You can install it by running:
  ```bash
  npm install -g @angular/cli
  ```

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/bilalsipra89/zenduit-usecase.git
   cd zenduit-usecase
   ```

2. **Install Dependencies**
   Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

3. **Set Up Mapbox Access Token**
   - Visit [Mapbox](https://www.mapbox.com/) and create an account if you don't have one.
   - Once you have signed in, generate an **API Access Token**.
   - Replace the `{ACCESS_TOKEN}` placeholder in the `environment.ts` file with your actual Mapbox token:
     ```envrionment.tsexport 
        const environment = {
            production: false,
            accessToken: '{ACCESS_TOKEN}',
        };
     ```

4. **Run the Application**
   After installing dependencies and setting up the Mapbox API token, you can start the development server with:
   ```bash
   ng serve
   ```

   The app will be available at [http://localhost:4200](http://localhost:4200).

## Features Overview

### 1. **Map/List Toggle**
   A toggle switch allows the user to switch between **Map** view and **List** view.

   - In **Map** view, markers are displayed using **Mapbox GL JS**.
   - In **List** view, the data is displayed as a simple list of items with their respective latitude and longitude.

### 2. **Markers on Map**
   The app uses **Mapbox GL JS** to display markers on the map. Each marker is added to the map using mock data with latitude, longitude, and title.

### 3. **Export Button**
   The **Export** button triggers a basic action (an alert and console log) simulating the export functionality. You can replace this with actual export logic like downloading a CSV or JSON.

### 4. **Date Picker**
   Users can select a date using the Angular Material date picker component.

### 5. **Dropdown Filters**
   A dropdown allows the user to filter the data. Currently, the filter options are mock data (`Option 1`, `Option 2`, `Option 3`), but you can expand this to more meaningful filters depending on your requirements.

## Application Structure

Here’s a brief overview of the project structure:

```
map-list-toggle-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Main component (Logic & View)
│   │   ├── app.component.html    # Template for the main component
│   │   ├── app.component.css     # Styling for the app component
│   │   ├── app.config.ts         # App Configurations
|   |   ├── app.routes.ts         # Define App Routes
│   ├── assets/                   # Static assets (images, etc.)
│   ├── environments/             # Environment configurations (dev, prod, etc.)
│   └── index.html                # Main HTML file
└── package.json                  # Project dependencies and scripts
```

## Technologies Used

- **Angular**: The front-end framework used to build the application.
- **Mapbox GL JS**: For rendering the map and displaying markers using **Mapbox**.
- **Angular Material**: For UI components like buttons, date picker, and toggle.
- **TypeScript**: For building the logic of the app.
- **CSS**: For styling the app.

## Known Issues

- The app is using mock data for markers and filters. You can easily integrate it with a real API if needed.
- Make sure to replace the `YOUR_MAPBOX_ACCESS_TOKEN` in the code with your actual token to avoid map rendering issues.

## Future Enhancements

- Implement a real export functionality (e.g., export data to CSV, JSON, or PDF).
- Implement more advanced filtering logic based on real data.
- Allow the user to customize the map (e.g., custom markers, info windows, etc.).
- Improve UI/UX design for better usability and aesthetics.

## Contributing

Feel free to fork this repository, submit issues, and make pull requests. Contributions are always welcome!

To contribute:

1. Fork the repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/map-list-toggle-app.git
   ```
3. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature
   ```
4. Commit your changes and push to your branch:
   ```bash
   git commit -am 'Add feature'
   git push origin feature/your-feature
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License.

---

### **Customization**
- Feel free to customize the app by modifying the `mock data`, `Mapbox` configuration, and adding more interactive features or additional components as required.

---

### Key Changes in This Version:

- Replaced **Google Maps** with **Mapbox GL JS** for rendering maps.
- The **Mapbox API Token** needs to be added for the app to work properly.
- The code for map initialization and marker handling has been updated to use **Mapbox**'s API instead of Google Maps.