# 🔋 Battery Tracker App

A cross-platform React Native app to monitor battery state and to check on the battery consumption. Built with React Native, React Navigation, and custom components.

---

## 📱 Features

- Toggle between Charging and Consumption using a good looking chart
- Custom header and footer UI
- Cross-platform (iOS & Android) layout compatibility
- Responsive design with `SafeAreaView` support
- Persistent navigation using React Navigation
- Footer for switching between screens (Battery Tracker screen - Account Settings Screen)

---

## 🧰 Tech Stack

- ⚛️ React Native
- 🚦 React Navigation
- 💅 Styled with `StyleSheet`
- 💾 TypeScript

---

## 📂 Project Main Structure

```bash
src/
├── components/      # Reusable UI components
├── screens/         # App screens
├── models/          # Type definitions
├── assets/          # Images
├── utils/           # Helper functions
├── data/            # JSON data
App.tsx              # Root app component
```
---

## ⚙️ How App works

- First screen showing the battery tracking and the chart that shows the charging states through time and the consumption.
- Second screen is a static screen representing how would the account settings screen would look like with its components.

- To run the whole app using Expo 
```bash
npx expo start
```
OR

```bash
npx expo start --clear
```

## 📱 UI



