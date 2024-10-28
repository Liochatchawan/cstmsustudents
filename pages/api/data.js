const mongoose = require('mongoose');

// ฟังก์ชันสำหรับเชื่อมต่อกับ MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return; // ตรวจสอบสถานะการเชื่อมต่อ เพื่อหลีกเลี่ยงการเชื่อมต่อใหม่ทุกครั้ง
  return mongoose.connect(process.env.MONGODB_URI);
};

// สร้าง schema สำหรับ Message
const MessageSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
});

// ตรวจสอบว่ามี Model ที่ชื่อ 'Message' อยู่แล้วหรือไม่ เพื่อป้องกันการกำหนด Model ซ้ำ
const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default async function handler(req, res) {
  try {
    await connectToDatabase(); // เรียกใช้ฟังก์ชันเชื่อมต่อกับ MongoDB

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
  } catch (error) {
    console.error("Database connection error:", error); // แสดงข้อผิดพลาดที่ console
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
