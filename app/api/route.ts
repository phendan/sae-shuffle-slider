import { extname as parseExtension } from 'path';
import fs from 'fs/promises';

import { fileTypes } from '@/types';
import type { FileExtension, Asset } from '@/types';
// import shuffleArray from '@/utilities/shuffleArray';
import sattoloCycle from '@/utilities/sattoloCycle';
import pseudoRandom from '@/utilities/pseudoRandom';

export const GET = async (request: Request) => {
    try {
        const index = await fs.readdir('./public/assets', { withFileTypes: true });

        if (index.length === 0) {
            return Response.json(
                { message: 'There were no files to display.' },
                { status: 404 }
            );
        }
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

        const shuffledAssets = sattoloCycle(assets);
        return Response.json(shuffledAssets, { status: 200 });
    } catch (exception) {
        return Response.json(
            { message: 'The asset folder was not found' },
            { status: 404 }
        );
    }
};
