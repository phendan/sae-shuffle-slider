import { extname as parseExtension } from 'path';
import fs from 'fs/promises';

import { fileTypes } from '@/types';
import type { FileExtension, Asset } from '@/types';

export const GET = async (request: Request) => {
    try {
        const index = await fs.readdir('./public/assets', { withFileTypes: true });
        const assets: Asset[] = [];

        for (let item of index) {
            if (item.isDirectory()) continue;
            const fileExtension = parseExtension(item.name);
            if (!fileTypes.hasOwnProperty(fileExtension)) continue;

            assets.push({
                path: `/assets/${item.name}`,
                mimeType: fileTypes[fileExtension as FileExtension]
            });
        }

        if (assets.length === 0) {
            return Response.json(
                { message: 'There were no files to display.' },
                { status: 404 }
            );
        }

        return Response.json(assets, { status: 200 });
    } catch (exception) {
        return Response.json(
            { message: 'The asset folder was not found.' },
            { status: 404 }
        );
    }
};
