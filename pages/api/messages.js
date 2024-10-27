import { connectToDatabase } from '../../lib/mongodb';
import Message from '../../lib/MessageModel';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { name, content } = req.body;

    try {
      const newMessage = await Message.create({
        _id: uuidv4(), // กำหนด _id เป็น UUID เพื่อให้เป็น unique string
        name,
        content,
      });
      res.status(201).json({ message: 'Message saved successfully', data: newMessage });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: 'Failed to save message', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
