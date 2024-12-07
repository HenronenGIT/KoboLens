import { z } from "zod";

export const ZBookmark = z.object({
    BookmarkID: z.string(),
    VolumeID: z.string(),
    ContentID: z.string(),
    StartContainerPath: z.string(),
    StartContainerChildIndex: z.number().int(),
    StartOffset: z.number().int(),
    EndContainerPath: z.string(),
    EndContainerChildIndex: z.number().int(),
    EndOffset: z.number().int(),
    Text: z.string().nullable(),
    Annotation: z.string().nullable(),
    ExtraAnnotationData: z.instanceof(Buffer).nullable(), // Assuming BLOB is handled as Buffer
    DateCreated: z.string().nullable(),
    ChapterProgress: z.number().default(0),
    Hidden: z.boolean().default(false),
    Version: z.string().nullable(),
    DateModified: z.string().nullable(),
    Creator: z.string().nullable(),
    UUID: z.string().nullable(),
    UserID: z.string().nullable(),
    SyncTime: z.string().nullable(),
    Published: z.boolean().default(false),
    ContextString: z.string().nullable(),
    Type: z.string().nullable(),
});

export type TBookmark = z.infer<typeof ZBookmark>;