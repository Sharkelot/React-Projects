# Modern Recipe Search App

A modern React recipe search application usinghe Spoonacular API, featuring real-time search, favorites system, and a responsive design with dark mode support.
![Recipe App Screenshot](screenshot.png)
## Features
- 🔍 Smart search with Enter-to-search functionality
 🖼️ Automatic image validation for quality results
 🌙 Dark mode support
 📱 Fully responsive design
 ❤️ Recipe favorites system
 🎨 Modern UI with smooth transitions
 📋 Detailed recipe information
## Quick Start
1. **Install Dependencies**

npm install

2. **Set Up Environment**
Create a `.env` file in the root directory:

REACT_APP_SPOONACULAR_API_KEY=your_api_key_here

3. **Start Development Server**

npm start


## Project Structure


recipe-app/
├── src/
│ ├── components/
│ │ ├── header/
│ │ ├── recipieList/
│ │ ├── recipieDetails/
│ │ └── favorites/
│ ├── App.js
│ └── App.css


## Key Components

### RecipeList
- Search functionality
- Recipe grid display
- Image validation
- Favorites toggle

### RecipeDetails
- Detailed recipe view
- Ingredients list
- Cooking instructions
- Nutritional information

### Header
- Navigation
- Dark mode toggle
- Favorites access

## Technologies Used

- React 18
- React Router v6
- Axios
- Modern CSS Features:
  - Container Queries
  - CSS Nesting
  - Custom Properties
  - Color Mix
  - Fluid Typography

## API Integration

Uses the Spoonacular API for:
- Recipe search
- Detailed recipe information
- Nutritional data

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Spoonacular API key

### Environment Variables
Required in `.env`:

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use this project as you wish.

## Acknowledgments

- Spoonacular API for recipe data
- React Icons for the icon set
- Create React App for the initial setup