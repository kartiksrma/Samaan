# Samaan - Readme

## Overview
The Samaan is a full-stack web application developed using Vanilla HTML, CSS, JS, and Firebase with realtime database support. It serves as a digital notepad where users can save and manage a list of grocery items or any other items they need to buy from the market.

## Features
- User-friendly interface for easy item management.
- Add new items to the list.
- Mark items as completed or remove them from the list.
- Realtime database support using Firebase.
- Automatic synchronization across multiple devices in real-time.

## Installation
1. Clone the repository to your local machine.
git clone https://github.com/kartiksrma/Samaan.git
2. Open the project folder in your preferred code editor.

## Usage
1. Use the input field to enter the items you need to buy.
2. Click the "Add" button to add the item to the list.
3. To remove an item as completed, tap the item.



## Firebase Setup
1. Create a Firebase project at [https://firebase.google.com/](https://firebase.google.com/).
2. Obtain your Firebase configuration credentials.
3. Replace the placeholder Firebase credentials in the `app.js` file with your own credentials.
```javascript
// Replace with your Firebase configuration
var firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   databaseURL: "YOUR_DATABASE_URL",
   projectId: "YOUR_PROJECT_ID",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   appId: "YOUR_APP_ID"
};
```
4.Enable the Firebase Realtime Database in your Firebase project.

## Upcoming Updates
We are excited to announce upcoming updates to the Grocery List Manager, which will enhance its functionality and user experience. Here's a sneak peek at what's coming soon:

1. OAuth Authentication with Google: Users will be able to sign in to the application using their Google accounts, adding an extra layer of security and convenience.

2. User Profiles: Users will have the ability to create profiles, allowing them to be part of multiple directories or shopping lists simultaneously.

Stay tuned for these exciting updates, which will further empower you in managing your grocery lists and shopping needs!
## User Interface
![UI of the Web App](../UI.png)

## Credits
The application uses the Firebase platform for realtime database support.

## License
This project is licensed under the MIT License.

