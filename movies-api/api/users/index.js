import express from 'express';
import User from './userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler';


const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});


//actually sign up user
router.post('/register', asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, msg: 'Username and password are required.' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ success: false, msg: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ success: true, msg: 'User successfully created.' });
}));

router.post('/register', asyncHandler(async (req, res) => {
    console.log('Incoming request:', req.body);
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword);
}));


//authenticate/login user
router.post('/login', asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    console.log('Incoming login request:', { username, password });

    const user = await User.findByUserName(username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    console.log('Stored hashed password:', user.password);

    const isMatch = await user.comparePassword(password);
    console.log('Password match result:', isMatch);

    if (isMatch) {
        const token = jwt.sign({ username: user.username }, process.env.SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, msg: 'Login successful.', token: `BEARER ${token}` });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}));




// Update a user
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await User.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'User Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update User' });
    }
});

export default router;
