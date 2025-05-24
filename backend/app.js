import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/main.js';

dotenv.config();


const app = express();

app.use(express.json());

// Use routes
app.use('/', routes);

app.get('/', (req, res) => {
  return res.json({message: "API Working.."});
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
