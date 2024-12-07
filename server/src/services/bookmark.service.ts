import { getDbInstance } from '../database';
import { TBookmark } from '../types/Bookmark.types';

export class BookmarkService {

    constructor() {
        // const db = getDbInstance();

    }



    async getAllBookmarks(): Promise<TBookmark[]> {
        const db = await getDbInstance();
        console.log("🚀 ~ BookmarkService ~ getAllBookmarks ~ db:", db)

        const query = 'SELECT * FROM Bookmark';
        const bookmarks = await db.all(query);
        console.log("🚀 ~ BookmarkService ~ getAllBookmarks ~ bookmarks:", bookmarks)
        await db.close();
        return bookmarks as TBookmark[];
    }
}