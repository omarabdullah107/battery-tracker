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

## 📸 App UI Screenshots

### 🔋 Battery Tracker Screen
![Battery Tracker](https://github.com/user-attachments/assets/c35cab12-baae-4aa8-adbd-76cb68b57a12)

### 🔋 Battery Tracker Screen using the toggle in it to show consumption of battery through time
![Toggle Switch](https://github.com/user-attachments/assets/a3900048-5efc-4817-9088-75e244dd3975)

### 👤 Account Settings
![Account Settings](https://github.com/user-attachments/assets/7251069a-4c69-41bf-8acf-7409025c04bb)


