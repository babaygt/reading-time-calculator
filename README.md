# Reading Time Calculator

Reading Time Calculator is a Chrome extension that calculates the reading time of a web page with presets for different reading speeds (slow, average, fast).

## Features

- Calculates reading time based on the number of words on the page.
- Provides presets for different reading speeds (100 WPM, 200 WPM, 300 WPM).
- User-friendly interface for easy interaction.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/babaygt/reading-time-calculator.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd reading-time-calculator
   ```

3. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable `Developer mode` by clicking the toggle switch in the top-right corner.
   - Click the `Load unpacked` button and select the project directory.

## Usage

1. Open any web page.
2. Click the Reading Time Calculator extension icon in the Chrome toolbar.
3. Select the desired reading speed from the dropdown.
4. The total words and estimated reading time will be displayed.

## Files

- `manifest.json`: The manifest file that configures the Chrome extension.
- `index.html`: The HTML file for the extension's popup.
- `style.css`: The CSS file for styling the popup.
- `script.js`: The JavaScript file that contains the logic for calculating reading time and communicating with the content script.
- `assets/`: Directory containing icons for the extension.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Reset CSS retrieved from [Piccalilli](https://piccalil.li/blog/a-more-modern-css-reset/).
