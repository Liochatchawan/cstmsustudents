const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

// สร้าง schema สำหรับ Message
const MessageSchema = new mongoose.Schema({
  username: String,
  message: String,
});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    // รับข้อมูลจาก request body
    const { username, message } = req.body;

    // ตรวจสอบข้อมูล
    if (!username || !message) {
      return res.status(400).json({ error: 'Username and message are required' });
    }

    // บันทึกข้อมูลลงใน MongoDB
    const newMessage = new Message({ username, message });
    await newMessage.save();

    return res.status(201).json({ message: 'Message saved successfully!' });
  } else if (req.method === 'GET') {
    // ดึงข้อมูลจาก MongoDB
    const messages = await Message.find({});
    return res.status(200).json(messages);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
