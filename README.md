# Highlight Saver Extension

This Chrome extension allows users to highlight text on any webpage, save the highlighted content, and later retrieve or summarize those highlights.

## Features

- **Highlight Text**: Users can highlight text on any webpage.
- **Save Highlights**: Once text is highlighted, a "Save Highlight?" button appears, allowing users to save the text.
- **View Saved Highlights**: Saved highlights are stored and can be viewed in a separate popup.
- **Summarize Highlights**: The extension can summarize all saved highlights using OpenAI's GPT-3 model.

## Installation

1. Clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** at the top-right.
4. Click **Load unpacked** and select the folder where this project is located.

## Usage

1. **Highlight Text**: Select any text on a webpage. A "Save Highlight?" button will appear.
2. **Save Highlight**: Click the button to save the highlighted text.
3. **View Highlights**: Click the extension icon to open the popup and view your saved highlights.
4. **Summarize Highlights**: In the popup, click the "Summarize" button to summarize all saved highlights.

## Dependencies

- **Chrome Storage API**: Used for storing highlights locally.
- **OpenAI API**: Used for summarizing the saved highlights.

## API Key

To enable the summarization feature, you'll need to provide your OpenAI API key. Replace `YOUR_OPENAI_API_KEY` with your actual key in the `summarizeHighlights` function.

```javascript
'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
