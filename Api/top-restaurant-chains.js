import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'restaurantChains.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading restaurantChains.json:', err);
      return res.status(500).send('Internal Server Error');
    }

    try {
      const chains = JSON.parse(data);
      res.status(200).json(chains);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
      res.status(500).send('Internal Server Error');
    }
  });
}
