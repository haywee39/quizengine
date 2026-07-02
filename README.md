# FGC Opeilu Sunday School - The Knowledge Navigator 🌟

**The Knowledge Navigator** is a dedicated, projection-friendly web-based quiz engine designed specifically for the Sunday School department at FGC Opeilu. Built with large displays and presentation screens in mind, this application allows operators to seamlessly manage and project live quiz competitions to contestants and the congregation during church events.

As seen in **Screenshot (1078).png**, the app features a clean, high-contrast theme optimized for projection clarity, featuring the Four Square Gospel Church emblems and a Scripture focus text (*Psalms 119:105*).

---

## 🚀 Key Features

* **Projection-Ready UI:** Optimized formatting specifically built to display beautifully when projected onto large sanctuary screens.
* **Full-Screen Functionality:** Includes a dedicated **Full Screen** trigger button (top right) and an explicit **Fullscreen Question** container button to eliminate browser interface clutter during active rounds.
* **Category Segmentation:** A dynamic dropdown selection mapping directly to the distinct Sunday School classes or age brackets to which the contestants belong.
* **Randomized/Numbered Picking:** Contestants select a specific number (from 1 to 10) within their chosen category to load their challenge.
* **The "Uncover Question" Mechanism:** Allows the operator to hide or mask loaded questions until the moment the contestant is ready, maintaining fair play and suspense.
* **Instant Area Reset:** A dedicated **Reset** button to quickly clear out the question field and reset state boundaries immediately after an answer is given, making it ready for the next contestant.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Display Optimization:** HTML5 Fullscreen API for seamless projection control
* **Design Theme:** Dark mode high-contrast presentation styling

---

## 📖 How It Works

During a live church quiz event, the platform is operated seamlessly via the following user flow:

1. **Enter Fullscreen:** The operator launches the app on the projection laptop and clicks **Full Screen** to hide browser toolbars.
2. **Select Class/Category:** The operator uses the "Select a Category" dropdown to pinpoint the current contestant's Sunday School level.
3. **Choose Number:** The contestant calls out a number between 1 and 10, which the operator inputs into the field.
4. **Unveil:** The operator clicks **Uncover Question!** to instantly display the challenge to the screen.
5. **Reset & Repeat:** Once the question is handled, clicking **Reset** clears out the display area to prepare cleanly for the next participant.

---

## 📂 Project Structure

```text
├── index.html          # Main presentation dashboard and logic
├── css/
│   └── style.css       # Projection-optimized dark theme rules
└── js/
    └── quizengine.js   # Dynamic question rendering and Fullscreen API controls