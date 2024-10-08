# Image Loading Animation

This project implements an image loading animation using HTML, CSS, and JavaScript. The goal is to provide a smooth user experience by displaying a loading spinner while the image is being loaded in the background.

## Features

- **Loading Spinner Animation**: A CSS-based loading spinner is shown until the image is fully loaded.
- **JavaScript Integration**: The spinner disappears once the image is loaded, showing the final image.
- **Error Handling**: Displays an error message if the image fails to load.

## Demo

You can view a demo of this project below:

![Demo GIF](https://cdn.dribbble.com/users/2177259/screenshots/6364756/loader_animation.gif?text=Demo+GIF)

## Technologies Used

- **HTML**: Structure of the image container and loading spinner.
- **CSS**: Styling for the spinner animation and layout.
- **JavaScript**: Dynamically handles image loading and hides the spinner once the image is loaded.

## How It Works

1. A loading spinner is displayed in the center of the image container.
2. The image is hidden until fully loaded.
3. Once the image is loaded, the spinner is hidden, and the image is shown.
4. If the image fails to load, an error message is shown.

## Code Example

Here’s a simplified version of the key code:

### HTML

```html
<div class="image-container">
    <div class="loading-spinner" id="loading-spinner"></div>
    <img id="image" src="https://example.com/your-image.jpg" alt="Image" style="display: none;">
</div>

<style>
    .loading-spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
