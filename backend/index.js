const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Message = require('./Message'); // นำเข้า Model Message
require('dotenv').config();

const app = express();
app.use(express.json());

// ตั้งค่า CORS ให้อนุญาต origin ที่ต้องการ
app.use(cors({
    origin: ['https://cstmsustudents.netlify.app', 'http://localhost:3000'],
  }));

// เชื่อมต่อกับ MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Failed to connect to MongoDB Atlas:", err));

// Route สำหรับ root URL
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});
app.get('/api', (req, res) => {
    res.send('Welcome to the API root');
  });
// Route สำหรับดึงข้อมูล message
app.get('/api/data', async (req, res) => {
  console.log("Fetching messages...");
  try {
    const messages = await Message.find().limit(10); // จำกัดจำนวนข้อมูลที่ดึงมาเพื่อทดสอบ
    console.log("Messages fetched successfully");
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: 'Failed to fetch messages', error: error.message });
  }
});

// Route สำหรับบันทึกข้อมูล message
app.post('/api/data', async (req, res) => {
  const { username, message } = req.body;

  if (!username || !message) {
    return res.status(400).json({ error: 'Username and message are required' });
  }

  try {
    const newMessage = new Message({ username, message });
    await newMessage.save(); // บันทึกข้อมูลลงใน MongoDB
    console.log("Message saved successfully");
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
