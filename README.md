# Highlighted Text Scroller

This React component highlights selected words or phrases in a long block of text and automatically scrolls to the highlighted text if it’s not within the visible area. The application is built using **Vite** with **React**.

## Features

- **Text Highlighting:** Highlights specified words or phrases within a block of text using regular expressions.
- **Auto-Scrolling:** Automatically scrolls to the last highlighted word if it's outside the visible area of the container.
- **Optimized Rendering:** Efficiently handles long text blocks and multiple highlights.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server.
- **Selection API:** Used to handle and manipulate text selections in the browser.
- **DOM API:** Specifically, the `scrollIntoView` and `getBoundingClientRect` methods for managing scrolling behavior.

## How It Works

1. **Text Highlighting:**

   - The `highlightText` function uses regular expressions to find and wrap selected words or phrases in a `<span>` element with a yellow background.
   - The highlighted text is then rendered using `dangerouslySetInnerHTML`.

2. **Auto-Scrolling:**

   - A `useEffect` hook monitors changes to the `selectedText`.
   - It checks the positions of the highlighted elements within the container using the `getBoundingClientRect` method.
   - If a highlighted element is outside the visible bounds of the container, it automatically scrolls into view using `scrollIntoView`.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/highlighted-text-scroller.git
    ```

    ```
    cd highlighted-text-scroller
    ```
    ```
    npm install
    ```
    ```
    npm run dev
    ```

## This project is licensed under the MIT License. See the LICENSE file for details.