// import Database from 'better-sqlite3';
// import { BookmarkSchema } from './src/types/Bookmark.types';

// export const parseSQLiteFile = (filePath: string) => {
//     const db = new Database(filePath, { readonly: true });

//     // Example query to fetch highlights
//     const bookmarks = db.prepare('SELECT * FROM Bookmarks').all();

//     // Process and return the highlights
//     return highlights.map(highlight => ({
//         id: highlight.id,
//         text: highlight.text,
//         bookId: highlight.book_id,
//         // Add more fields as necessary
//     }));
// };