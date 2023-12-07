const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Use session to keep track of login status
app.use(require('express-session')({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Initialize Passport and session support
app.use(passport.initialize());
app.use(passport.session());

// Set up Google OAuth strategy
passport.use(new GoogleStrategy({
   clientID: 'your-google-client-id',
   clientSecret: 'your-google-client-secret',
   callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
   // This is where you would typically create or update a user in your database
   return done(null, profile);
}));

// Serialize user to store in session
passport.serializeUser((user, done) => {
   done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
   done(null, user);
});

// Set up route for Google authentication
app.get('/auth/google',
   passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route after successful authentication
app.get('/auth/google/callback',
   passport.authenticate('google', { failureRedirect: '/' }),
   (req, res) => {
      // Successful authentication, redirect to the home page or wherever you want
      res.redirect('/');
   }
);

// Simple home route
app.get('/', (req, res) => {
   res.send('Hello, this is the home page!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
