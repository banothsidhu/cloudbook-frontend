const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_TOKEN = 'This Is The JWT Token';

// Create a User using: POST "/api/auth/createuser". Doesn't require Auth
router.post(
    '/createuser',
    [
        body('name', 'Enter a valid name').isLength({ min: 3 }),
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({ email: req.body.email });

        try {
            if (user) {
                return res.status(400).json('User Already Exists');
            } else {
                const salt = bcrypt.genSaltSync(10);
                console.log(salt);
                const secPass = bcrypt.hashSync(req.body.password);

                let user = await User.create({
                    name: req.body.name,
                    password: secPass,
                    email: req.body.email,
                });
                try {
                    const authToken = jwt.sign({ id: user._id }, JWT_TOKEN);
                    res.json(authToken)


                } catch (err) {
                    res.status(400).json('Something went wrong');
                }
            }
        } catch (err) {
            res.status(400).json('Something went wrong');
        }
    }
);

module.exports = router;
