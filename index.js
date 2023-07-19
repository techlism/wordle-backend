import express from 'express';
import { readFileSync } from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
// Function to read the words from the text file
function readRandom() {
  const fileContent = readFileSync('words.txt', 'utf8');
  const words = fileContent.replace(/\r/g, "").trim().split('\n');
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  return randomWord;
}

// Route to get a random word
app.get('/random-word', (req, res) => {
    const randomWord = readRandom();
    res.json({word : randomWord});
});

// Start the server
const port = process.env.PORT ; // Change this to your desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
