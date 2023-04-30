const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_TOKEN = 'This Is The JWT Token';

//SignUp User (/api/auth/createuser)------------------------------------------
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
                    res.json(user)


                } catch (err) {
                    res.status(400).json('Something went wrong');
                }
            }
        } catch (err) {
            res.status(400).json('Something went wrong');
        }
    }
);


//Login (/api/auth/Login)------------------------------------------

router.post(
    '/login',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', "Pasword cant be blank").exists(),
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            const authToken = jwt.sign({ id: user._id }, JWT_TOKEN);
            res.json(authToken);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

//Logged in user Details ----------------------------


router.post('/getuser',fetchuser, async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        try {
            res.send(user)
        } catch (e) {
            res.json("No User found")
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
})

module.exports = router;
