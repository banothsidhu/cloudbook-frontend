const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/note');
const { body, validationResult } = require('express-validator');

// Fetch All Notes Of A User ---------------------------

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
})

// Add Notes  ---------------------------

router.post('/addnote', fetchuser, [
    body('title', 'Enter Min 3 letter Title').isLength({ min: 3 }),
    body('description', 'Enter a Min 3 letter Description ').isLength({ min: 3 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savednote = await note.save()
        res.json(savednote)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
})

// Updating the existing notes --------------------------------

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body
        const newNote = {}

        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }

        let note = await Note.findById(req.params.id)

        if (!note) {
            return res.status(404).json("No Note Found!")
        }
        console.log(note)
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json("Not Allowed!")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
})



module.exports = router