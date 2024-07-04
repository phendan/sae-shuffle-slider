export const fileTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.bmp': 'image/bmp',
    '.tiff': 'image/tiff',
    '.tif': 'image/tiff',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.mp4': 'video/mp4',
    '.mkv': 'video/x-matroska',
    '.mov': 'video/quicktime',
    '.avi': 'video/x-msvideo',
    '.wmv': 'video/x-ms-wmv',
    '.flv': 'video/x-flv',
    '.webm': 'video/webm',
    '.m4v': 'video/x-m4v',
    '.mpeg': 'video/mpeg',
    '.3gp': 'video/3gpp'
} as const;

export type FileTypes = typeof fileTypes;

export type FileExtension = keyof FileTypes;

export type Asset = { path: string; mimeType: string };
