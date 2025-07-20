# Gemini Clone
This is a Gemini clone project built to practice and strengthen core React concepts such as hooks, context API, and component design. The project was completed over the course of three days and serves as a hands-on learning tool to reinforce React fundamentals while also experimenting with UI behavior and API integration. <b>A detailed design document is coming soon!</b>

### 🚀 Features
- Interactive flashcard-style prompt suggestions, randomly generated
- Sidebar animation enhanced with custom behavior
- Pressing the Enter key triggers prompt submission
- Prompts can be saved and displayed as recent history
- Core logic and styling largely follow the original tutorial, but with customized implementations

### 🧠 Technologies Used
- React (Hooks, Context API)
- Gemini 2.5 SDK (API integration using TypeScript)
- Marked for markdown parsing
- DOMPurify for sanitizing rendered content
- Custom CSS for animations and styling

### 🔍 Key Differences from the Original YouTube Tutorial
While the majority of the functionality and UI is based on the video tutorial used as a guide, this version introduces several improvements and changes:

  - Sidebar Animation: Custom animation logic diverges from the original, with a different implementation approach
  - Flashcard Prompt Generator: Random prompts appear on cards, adding interactivity
  - Keyboard Trigger: Enter key can be used to submit prompts (in addition to button click)
  - Recent Prompts Saving: Refactored and implemented differently from the original method
  - API Integration: Gemini SDK code is written in TypeScript rather than JavaScript
  - Markdown paragraph cleanse

### 📁 Project Structure (Simplified)
bash
Copy
Edit
src/
│
├── components/         # React UI components
├── config/             # Gemini SDK setup
├── context/            # React Context setup
├── assets/             # Icons, images
├── App.jsx             # Main application layout
└── main.jsx            # Entry point

### 📽️ Reference
This project is inspired by a -[YouTube tutorial](https://www.youtube.com/watch?v=0yboGn8errU&list=PLjwm_8O3suyMMs7kfDD-p-yIhlmEgJkDj) by  GreatStake, and adapted for deeper learning and customization.

### Potential Improvements of this project
- Prompts and previous chats should be saved and displayed on the same page, rather than loading into a new one.
- Improved animations for a smoother user experience.
- Expanded pool of suggested prompts for more variety.
- Sidebar buttons (e.g., Help, etc.) should have functional behavior implemented.


