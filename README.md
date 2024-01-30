# CityLife
## Description
A mobile app designed to provide a comprehensive view of all the events, services, and reminders available in your city.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Supabase](#supabse)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Supabase
Replace supabase URL and API keys by ur keys: 
```
// /src/lib/supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_API_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

```
## Installation

To get started with Your App Name, follow these steps:

#### Clone the Repository:

```
git clone https://github.com/your-username/your-app-name.git
cd your-app-name
```

#### Install Dependencies:
```
npm install
```

#### Start the Expo Development Server:
```
npm start
``````

Open Expo Go on Your Mobile Device and Scan the QR code displayed in the terminal using the Expo Go app on your mobile device.

## Technologies Used

#### React Native

[React Native](https://reactnative.dev/) is a framework for building mobile applications using React and JavaScript. It allows you to create native mobile apps for both iOS and Android platforms.

#### React Navigation

[React Navigation](https://reactnavigation.org/) is a popular navigation library for React Native. It provides a customizable and easy-to-use navigation solution for building navigation structures in your mobile app.

#### UI Kitten

[UI Kitten](https://akveo.github.io/react-native-ui-kitten/) is a React Native framework for creating stunning UIs. It comes with a set of customizable components that follow the "Kitten Tricks" design system, making it easy to create beautiful and consistent user interfaces.

#### Expo

[Expo](https://expo.dev/) is a set of tools and services built around React Native to help you develop, build, and deploy your React Native applications more easily. It provides a variety of features, including a development server, build tools, and access to native APIs without requiring native code development.

## Hackton
Un immense merci aux organisateurs du ApplETS Mobile Challenge Hackathon 2024 ! Participer à cet événement a été un plaisir immense.
