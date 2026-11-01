# Skill Swap

Skill Swap is a web app where students can swap skills with each other. You enter the skill you can teach and the skill you want to learn, and the app shows you students who match.

I built this with the MERN stack to practice full stack development.

## What it can do

- Register with OTP verification (the OTP is sent by email), and log in
- Search students by skill
- Show matching students with a match score
- Send a connection request to a student
- The other student gets a WhatsApp message about the request (WhatsApp Cloud API)
- See your requests as pending, accepted or rejected
- A dashboard with a summary of your requests

## How matching works

Every student has two things: the skill they teach and the skill they want to learn. When I compare myself with another student, I give points like this:

- They teach what I want to learn: 60 points
- I teach what they want to learn: 40 points
- We both teach the same skill: 10 points

The maximum score is 100. Students with 0 points are not shown, and the rest are sorted from highest to lowest score. The code is in `my-app/src/Matchscore.js`.

## Built with

- React and Axios (frontend)
- Node.js and Express (backend)
- MongoDB and Mongoose (database)
- Nodemailer (OTP emails)
- WhatsApp Cloud API by Meta (for the connection request message)

## Run it on your computer

You need Node.js and MongoDB installed.

First, the backend. Create a file `backend/.env` with your Gmail details (for the OTP email) and your WhatsApp Cloud API details (from the Meta for Developers dashboard):

```
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
WHATSAPP_API_VERSION=v21.0
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id
WHATSAPP_TOKEN=your_access_token
```

Then run:

```
cd backend
npm install
npm start
```

It runs on http://localhost:5000.

Then open a new terminal for the frontend:

```
cd my-app
npm install
npm start
```

It opens on http://localhost:3000.

## Folders

- `backend` - Express server, routes, controllers and the User model
- `my-app` - React frontend

## Things I know are not perfect yet

- Passwords are not hashed yet. I want to add bcrypt and JWT login.
- Connection requests and the dashboard data are saved in the browser (localStorage), not in the database.
- Pages change with React state, so the URL does not change. I plan to move to React Router.

## About me

I am Ashok Poola, a 3rd year B.Tech ECE student at NRI Institute of Technology. I am learning the MERN stack and looking for an internship as a web developer.

GitHub: https://github.com/ashok123dev
