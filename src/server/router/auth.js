const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy

const init = (app, config) => {
  // Setting github strategy
  passport.use(new GitHubStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
  },
  // Validator - usually for retrieving the user from db (we have none)
  (accessToken, refreshToken, profile, cb) => {
    cb(null, profile)
  }
  ))

  // Serializing user to the session
  passport.serializeUser((user, done) => {
    done(null, user)
  })
  // Deserializing user to the session
  passport.deserializeUser((user, done) => {
    done(null, user)
  })

  // Login endpoint - passport would redirect to github for authentication
  app.get('/login',
    passport.authenticate('github'))

  // Logout endpoint
  app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  // Callback endpoint - this is where a lot of passport black magic
  // is applied, it is invoke by gitub after a successful login
  app.get('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
    // Successful authentication, redirect home.
      res.redirect('/')
    })
}

// Authentication middleware to by mounted on the path we want to secure
const authenticationMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

module.exports = { init, authenticationMiddleware }
