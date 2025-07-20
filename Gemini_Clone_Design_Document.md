# Gemini Clone – Design Document

## Overview
This Gemini Clone project was built to practice essential React skills, including hooks, context API, and API integration. The goal was to create a working AI chatbot interface using the Gemini 2.5 API with functional UI components and dynamic state-driven behavior.

## Folder Structure
```
/assets              - Static images and icons
/components          - React UI components (Sidebar, MainScreen)
/config              - Gemini SDK and API configuration (gemini.ts)
/context             - Global context provider for state and functions (context.jsx)
App.jsx              - Main app structure that wraps Sidebar and MainScreen
main.jsx             - React root file with ContextProvider wrapper
index.css            - Global styles and media queries
```

## Development Timeline and Steps

### 1. Initial UI Setup
- **Files Involved**: `Sidebar.jsx`, `MainScreen.jsx`, `App.jsx`
- Designed basic static UI for the Sidebar and MainScreen.
- All elements were hardcoded placeholders, including:
  - “New Chat” button
  - Flashcard-like prompt cards
- No functionality or interactivity yet; layout only.

### 2. Component Integration
- **App.jsx** was updated to include and render both the Sidebar and MainScreen.
- This ensured the page structure was in place and ready for functional logic.

### 3. API Integration Setup
- Created the **`/config/gemini.ts`** file:
  - Stored Gemini API SDK logic.
  - Retrieved the API key and set up a function to send user input to Gemini and get a response.

### 4. Adding Context and Global State
- Created **`/context/context.jsx`**:
  - Centralized all state variables and functions related to:
    - User input
    - Response data
    - Recent prompts
    - Loading state
    - UI visibility
  - Introduced `useContext` to **avoid props drilling** — making state accessible across multiple components without passing down props manually.
- State management enabled dynamic UI updates based on user interaction.
- **Wrapped the app with `<ContextProvider>`** inside `main.jsx`:
  ```jsx
  <ContextProvider>
    <App />
  </ContextProvider>
  ```

### 5. Functionality: AI Integration
- Connected the text input bar to the Gemini API using `runChat()` from `gemini.ts`.
- Initially, the response was only logged to the console.

### 6. Displaying API Response
- Stored the API response in a state variable.
- Added logic to safely display it in the UI:
  - Used **`marked`** to convert markdown syntax to HTML.
  - Used **`DOMPurify`** to sanitize HTML and prevent XSS vulnerabilities.
- Created loading animation and typing animation to simulate chat behavior.
  - Typing logic managed in `context.jsx`.

### 7. Sidebar Functionality
- Added interactivity to:
  - “New Chat” button (clears input and response).
  - Saving recent prompts to a list for later reference.
- **Note**: Clicking a saved prompt **regenerates a new response** from Gemini each time (doesn’t retrieve old response like real chat apps).

### 8. Prompt Cards
- Added clickable prompt cards on the main screen.
- Functionality:
  - Clicking a card sends the associated prompt to the Gemini API.
  - Prompts are randomly selected from a fixed set of 40 prompts stored in a helper file.

### 9. Animation and Finishing Touches
- Added smooth sidebar transition using CSS keyframes or transition properties to avoid jumpiness.
- Final refinements:
  - Improved layout responsiveness
  - Added styling polish to match the Gemini theme
  - Ensured proper component isolation and reusability

## Known Limitations
- Previous chats aren’t persisted — only the prompt is saved, not the full conversation.
- Responses regenerate fresh from Gemini on every prompt click (not a true chat history).

## Tools & Libraries Used
- **React**
- **Gemini API 2.5 SDK (TS-based)**
- **marked** – Markdown parser
- **DOMPurify** – XSS-safe HTML rendering
- **CSS transitions** – For sidebar animation
- **React Context API** – For global state and avoiding props drilling

## Future Improvements
- Implement actual chat history with response caching.
- Add user authentication and localStorage support.
- Style enhancements for mobile views.
- Improve card diversity or fetch new prompts from an external API.
