# Sliding Window Algorithm – Longest Word Finder

## 📌 Project Overview
This project is a simple web application that uses the **Sliding Window Algorithm** to find the **longest word** in a given text.

Users can paste or type any block of text into the input area, and with the click of a button, the app will analyze the text and identify the longest word.

## 🎯 Features
- Clean and minimalistic **user interface**.
- **Text area** for inputting or pasting text.
- **Sliding Window Algorithm** implementation for efficient processing.
- **Single-click** button to find and display the longest word.

## 🖼 UI Preview
![App Screenshot](./screenshot.png)

## 🧠 How It Works
1. **User Input**: Enter or paste a paragraph of text into the provided text area.
2. **Process Text**: When you click **"Find the longest word"**, the algorithm scans through the text using the **sliding window technique**.
3. **Output**: The application displays the longest word it finds.


## 🛠 Technologies Used
- **HTML5** – Structure of the web page.
- **CSS3** – Styling and layout.
- **JavaScript (Vanilla)** – Algorithm logic and interactivity.

## 🚀 Getting Started
1. Clone this repository:
   ```bash
   git clone https://github.com/Jcdelega/Sliding_Window_Algorithm_ProjectProject.git

## 📚 Algorithm Explanation
The Sliding Window Algorithm works by:

- Keeping track of a "window" (current word) in the text.

- Expanding the window until it reaches the end of a word.

- Comparing its length to the longest found so far.

- Moving the window forward until all words are checked.

This approach avoids unnecessary re-checking of characters, making it efficient even for large texts.