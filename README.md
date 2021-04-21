# La Nurserie

## “A little bit of help with a whole lot of love”

Are you a parent or guardian? Do you struggle with options of finding who to care for your little ones? Send us a WhatsApp message over at La Nurserie! We have the solution for you!

## Table of Contents

- [La Nurserie](#la-nurserie)
- [Table of Contents](#table-of-contents)
- [Purpose](#purpose)
- [Installation](#installation)
- [Wireframes, Packages & Softwares](#wireframes-packages-&-softwares)
- [Documentation](#documentation)

## Twilio Inc / Wild Code School Hackathon

Welcome to the Full Stack repository of my team's submission to the March 2021 Wild Code School Hackathon hosted by Twilio Inc.

![Javascript](https://aleen42.github.io/badges/src/javascript.svg)
![Twilio](https://img.shields.io/badge/API-twilio-red)
![React](https://img.shields.io/badge/React-blue)
![React-Router-Map](https://img.shields.io/badge/JS-Router%20Router%20Dom-green)
![React-Icons](https://img.shields.io/badge/JS-React%20Icons-Purple)
![Styled-Components](https://img.shields.io/badge/CSS-Styled%20Components-Pink)

## Purpose

The Hackathon group participants were each tasked with developing a product aimed at providing disaster relief for socially impacted areas of our global economy. i.e. climate change, mental health, equal opportunity, etc. within a 48-hour time frame.

Using React.js, mongoDB, Node and Express, among a myriad of technologies (a complete list of which can be found at the end of this readme), we developed a website application integrated with WhatsApp for providing daycare assistance to parents and guardians unable to reach tutelage solutions for their children. 

## Installation

```
$ npm install

$ cp .env.example .env
$ # set values in .env file

$ npm start

```

## Wireframes, Packages & Softwares

- React
- React Hooks & Icons
- Styled Components
- Node.js
- Express.js
- Twilio Studio API
- mongoDB with Atlas
- Mongoose
- Node-Geocoder
- Open Street Maps
- Heroku
- Netlify
- Figma
- Miro

## Documentation

### Maps (OpenStreetMaps)

This project uses OpenStreetMaps as a Geocoding API provider, it can be replaced by updating the options variable in app.js

### Twilio

To enable WhatsApp communication flow:

- set up Twilio WhatsApp testing sandbox (https://www.twilio.com/docs/whatsapp/sandbox)
- set up Twilio studio flow by importing it from twilio/flow.json file
- update http widgets in flow to use the correct endpoint (if creating your own deployment)
- set sandbox inbound webhook to the value from trigger widget in flow

Miro conceptual map: https://miro.com/welcomeonboard/EQkTa05Q8yHjWVmLKVydeElLFNPaHjR0ecczK5N1hogFTskwhWpqfRnaPvWxAd3J
Miro workflow map: https://miro.com/app/board/o9J_lU-0zKI=/

### Deployment (Heroku & Netlify)

Fullstack Deployment via Netlify: https://lucid-feynman-60c600.netlify.app/

Backend Deployment: https://radiant-badlands-42962.herokuapp.com/babysitters

## Developed by Wilders

### Developers:
- Alfred Castillo https://github.com/aCastilloNL
- Victoria Kulinkovich https://github.com/KulinkovichVA
- Jeanloup Cayuela https://github.com/j-loup30400
- Dima Piskun https://github.com/DzmitryPS
- Jacopo Luri https://github.com/JacopoLuri
- Niko Phalen https://github.com/nphalen29

> WebApp created in 48-hours
