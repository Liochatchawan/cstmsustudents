// pages/api/submitSurvey.js
import { MongoClient } from 'mongodb';

const uri = 'YOUR_MONGODB_CONNECTION_STRING'; // ใส่ URI ของ MongoDB ที่คุณสร้าง
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const surveyData = req.body;

    try {
      await client.connect();
      const database = client.db('your_database_name'); // ชื่อฐานข้อมูล
      const collection = database.collection('surveys'); // ชื่อคอลเลกชัน

      const result = await collection.insertOne(surveyData);
      res.status(201).json({ message: 'Survey submitted successfully', id: result.insertedId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit survey' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
