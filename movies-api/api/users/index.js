import express from 'express';
import User from './userModel';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';


const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// register(Create)/Authenticate User
// router.post('/', asyncHandler(async (req, res) => {
//     try {
//         if (!req.body.username || !req.body.password) {
//             return res.status(400).json({ success: false, msg: 'Username and password are required.' });
//         }
//         if (req.query.action === 'register') {
//             await registerUser(req, res);
//         } else {
//             await authenticateUser(req, res);
//         }
//     } catch (error) {
//         // Log the error and return a generic error message
//         console.error(error);
//         res.status(500).json({ success: false, msg: 'Internal server error.' });
//     }
// }));

//actually sign up user
router.post('/register', asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({sucess: false, msg: "Username and password required"});
    }

try{
    const token = await registerUser(req.body);
    res.status(200).json({success: true, msg: 'Login Scucessful', token})
} catch (error){
    console.error(error);
    res.status(401).json({success: false, msg: 'Invalid username or password'})
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

async function registerUser(req, res) {
    const { username, password} = req.body;
    const existingUser = await User.findOne({username});
    if (existingUser){
        throw new Error('User already exists');
    }else{
        const hashedPassword = await bcrypt.hash(password, 5);
        const newUser = new User({username, password: hashedPassword})
        await newUser.save();
    }
    res.status(201).json({ success: true, msg: 'User successfully created.' });
}

async function authenticateUser(req, res) {
    const user = await User.findByUserName(req.body.username);
    if (!user) {
        return res.status(401).json({ success: false, msg: 'Authentication failed. User not found.' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
        const token = jwt.sign({ username: user.username }, process.env.SECRET);
        res.status(200).json({ success: true, token: 'BEARER ' + token });
    } else {
        res.status(401).json({ success: false, msg: 'Wrong password.' });
    }
}


export default router;
