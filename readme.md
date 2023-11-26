# URL Shortener API

This is a basic URL shortener API that allows you to shorten URLs and retrieve the original URL by using the generated short URL.

## Usage

### Shorten URL

To shorten a URL, make a `POST` request to `/api/shorturl` with the original URL in the request body. You will receive a JSON response with the `original_url` and `short_url` properties.

**Example:**
```json
{
  "original_url": "https://freeCodeCamp.org",
  "short_url": 1
}
```
## Redirect to Original URL
To access the original URL using the short URL, visit /api/shorturl/<short_url>. This will redirect you to the original URL.
## Error Handling
If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error message.
**Example:**
```json
{
  "error": "invalid url"
}
```
## Installation

1. Download the project files to your computer.
2. Navigate to the project directory in the terminal or command prompt.
3. Install the necessary dependencies using the `npm install` command.
4. Start the application with the `npm start` command.
5. Use the API by visiting `http://localhost:3000` in your browser.

## Dependencies

- [Express.js](https://expressjs.com/): A lightweight web framework used for building web applications and APIs.
