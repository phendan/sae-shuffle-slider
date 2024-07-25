import type { Asset } from '@/types';
import { Dispatch, useEffect } from 'react';

import NextImage from 'next/image';

interface ImageProps {
    asset: Asset,
    state: 'active' | 'queued' | 'exited',
    dispatch: Dispatch<{ type: 'nextSlide' } | { type: 'previousSlide' }>
}

const DISPLAY_DURATION = 10000;

function Image({ asset, state, dispatch }: ImageProps) {
    useEffect(() => {
        if (state !== 'active') return;
        const timeoutId = setTimeout(() => dispatch({ type: 'nextSlide' }), DISPLAY_DURATION);
        return () => clearTimeout(timeoutId);
    }, [state, dispatch]);

    return (
        <NextImage
            src={asset.path}
            alt={asset.path}
            width="1920"
            height="1080"
            className="w-full h-screen object-contain"
        />
    );
}

export default Image;
