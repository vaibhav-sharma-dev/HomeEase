import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import dotenv from "dotenv";
import User from '../Models/User.Models.js';


dotenv.config();
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    console.log(jwt_payload);
    
    try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);
        } 
        
        else {
          return done(null, false);
        }
    } 
    
    catch (err) {
        return done(err, false);
    }
}));