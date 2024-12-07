import express, { Request, Response, NextFunction } from 'express';
import { TBookmark } from '../types/Bookmark.types';

const router = express.Router();

// Middleware for logging requests
router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Example route handler
router.get('/', async (req: Request, res: Response) => {
    try {
        // Fetch bookmarks logic here
        const bookmarks: TBookmark[] = []; // Replace with actual data fetching
        res.status(200).json(bookmarks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add more route handlers here

export default router;
