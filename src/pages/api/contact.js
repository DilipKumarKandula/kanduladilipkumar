import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Adjust path to point inside src/data
    const filePath = path.join(process.cwd(), 'src', 'data', 'messages.json');

    try {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      const messages = JSON.parse(fileData);

      const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      };

      messages.push(newMessage);

      fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

      return res.status(200).json({ success: true, message: 'Message saved successfully!' });
    } catch (error) {
      console.error('Error writing message:', error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
