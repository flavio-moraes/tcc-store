const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;
const User = require("./models/User");
const CryptoJS = require("crypto-js");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.API_URL+"/api/v1/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("google strategy");
    console.log("aceesToken: ", accessToken, "  refreshToken: ", refreshToken, "  profile: ", profile);

    User.findOne({ email: profile.emails[0].value }, function (err, user) {
      if (err) return done(err);
      if (!user) {
        console.log("criando user");
        const newUser = {};
        newUser.firstname = profile.name.givenName;
        newUser.lastname = profile.name.familyName;
        newUser.email = profile.emails[0].value;
        newUser.password = " ";
        newUser.role = "client";

        User.create(newUser, function (err, user) {
          console.log("criando user db");
          if (err) return done(err);
          console.log("criando user done");
          return done(null, user);
        });
      } else {
        return done(null, user);
      }
    });

    //done(null, profile);
  }
));

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      console.log("find");
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      const storedPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC).toString(CryptoJS.enc.Utf8);
      console.log("has user");
      if (password !== storedPass) { return done(null, false); }
      console.log("passed");
      //const returnedUser = {id: user.id, name: user.username, isAdmin: user.isAdmin};
      return done(null, user);
    });
  }
));

/*
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SEC;
// Usada por requisições autenticadas para deserializar o user (fetch detalhes do usuário do JWT)
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    // Check against the DB only if necessary.
    // This can be avoided if you don't want to fetch user details in each request.
    User.findOne({ _id: jwt_payload._id }, function (err, user) {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
        // or you could create a new account
      }
    })
  })
)
*/

passport.serializeUser((user, done) => {
  //Quais dados serão salvos no sessionStore
    console.log("serialize");
    console.log(user);
    //done(null, user);
    //done(null, { id: user.id, username: user.name });
    done(null, {id: user.id, role: user.role});
});

passport.deserializeUser((user, done) => {
  //Dados recuperados do sessionStore
  console.log("DEserialize");
  console.log(user);
    done(null, user);
    /*
    try {
      const user = await User.findOne({_id: id});
      done(null, user);
    } catch (err) {
      done(err, null);
    }
    */
});

