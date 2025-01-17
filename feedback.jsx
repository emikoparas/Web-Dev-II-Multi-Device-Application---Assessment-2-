import express from 'express';
import Feedback from '../models/Feedback.js';

const router = express.Router();

router.post('/feedback', async (req, res) => {
  try {
    const { name, email, feedback } = req.body;
    const newFeedback = new Feedback({ name, email, feedback });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(400).json({ message: error.message });
  }
});

export default router;