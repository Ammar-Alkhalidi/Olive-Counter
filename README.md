# Olive-Increments-Counter

![Screnshoot](https://github.com/Ammar-Alkhalidi/Olive-Counter/blob/main/reference.gif)

This project demonstrates the implementation of a simple React app using state handling, props, and conditional rendering.


# Features
*- A button increments a counter value stored in React state.
*- A Text component dynamically displays the counter and changes its behavior based on the value:
*- Displays the count value below 10.
*- Changes background color to olive when the count exceeds 5.
*- Displays a specific message when the count is greater than 10.



# Getting Started
- Prerequisites
Ensure you have the following installed:

*-Node.js (v16 or higher)
*-npm (comes with Node.js)
Installation
Clone this repository:
bash
Code kopieren
git clone <repository-url>
cd olive-counter
Install dependencies:
bash
Code kopieren
npm install
Start the development server:
bash
Code kopieren
npm run dev
Open your browser and navigate to:
arduino
Code kopieren
http://localhost:5173
Implementation Details
1. Text Component
Located in src/components/Text.jsx, the Text component:

Receives a count prop from its parent.
Displays:
"The current count is: X" if count is less than 10.
A message with an olive background when count is greater than 5.
"Count is bigger than 10" if count exceeds 10.

Demo
Initial State:

After Incrementing (Count > 5):

After Incrementing (Count > 10):

Technologies Used
React
Vite (for fast development build)
CSS for styling
