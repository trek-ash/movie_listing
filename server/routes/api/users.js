const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keys = require("../../config/keys");
const UserInfo = require("../../models/UserInfo");

// @route POST /register
// @desc Register User with email and password
// @access Public
router.post("/register", async (req, res) => {
    try {
    
      const {
        email,
        password,
      } = req.body;
  
      const user = await UserInfo.findOne({
        email: email.toLowerCase()
      });
  
      if (user) {
    
        return res.status(422).json({
        Body: "EMAIL_ALREADY_REGISTERED"
        });
      } else {
        let i = Math.floor(100000 + Math.random() * 900000);
        const newUser = new UserInfo({
          email: email.toLowerCase(),
          password: password,
          username: `movie_freak_${i}`,
        });
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newUser.password, salt);
        newUser.password = hash;
        const user = await newUser.save();
  
        const payload = {
          id: user._id,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            return res.status(200).json({
              Body: "Bearer " + token
            });
          }
        );
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        Body: "NETWORK_ERROR"
      });
    }
});

// @route POST /login
// @desc Authenticate User
// @access Public
router.post("/login", async (req, res) => {
    try {
        const email = req.body.email.toLowerCase();
        const password = req.body.password;

       

        // Find user by email
        const user = await UserInfo.findOne({
        email
        });
        if (user) {
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const payload = {
                id: user._id,
            };
            // Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    return res.status(200).json({
                        Body: "Bearer " + token
                    });
                }
            );
            /*const token = user.token;
            return res.status(200).json({
            Body: "Bearer " + token
            });*/
        } else {
            return res.status(400).json({
            Body: "INCORRECT_PASSWORD"
            });
        }
        } else {
        return res.status(400).json({
            Body: "EMAIL_NOT_FOUND"
        });
        }
    } catch (e) {
        return res.status(500).json({
        Body: "NETWORK_ERROR"
        });
    }
});
  
module.exports = router;