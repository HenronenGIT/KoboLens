import { z } from "zod";

export const BookmarkSchema = z.object({
    id: z.number(),
    title: z.string(),
    page: z.number(),
    // Add other fields as necessary
});