import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'category.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading category.json:', err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      const categories = JSON.parse(data);
      res.status(200).json(categories);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Internal Server Error');
    }
  });
}
