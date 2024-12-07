import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './src/middleware/errorHandler';
import bookmarkRoutes from './src/routes/bookmark.routes';
import rootRouter from './src/routes/root.routes';

const app = express();

// Enable CORS
app.use(cors());

// Use morgan for logging
app.use(morgan('tiny'));

// Middleware to parse JSON
app.use(express.json());

// Use the bookmark routes
app.use('/api', rootRouter);

app.use('/bookmarks', bookmarkRoutes);

// Use the error handling middleware
app.use(errorHandler);

// Catch-all route for unmatched endpoints
app.use((req, res) => {
  res.status(404).send('Endpoint not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});