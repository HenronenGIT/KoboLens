import express, { Request, Response } from 'express';
import { BookmarkService } from '../services/bookmark.service';
import { TBookmark } from '../types/Bookmark.types';

const router = express.Router();

// Middleware for logging requests
// router.use((req: Request, res: Response, next: NextFunction) => {
//     console.log(`${req.method} ${req.path}`);
//     next();
// });

// Example route handler
router.get('/', async (req: Request, res: Response) => {
    try {
        const bookmarkService = new BookmarkService();
        const bookmarks: TBookmark[] = await bookmarkService.getAllBookmarks();

        res.status(200).json(bookmarks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add more route handlers here

export default router;
