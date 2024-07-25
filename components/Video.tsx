import type { Asset } from '@/types';
import { useEffect, useRef, useState } from 'react';
import type { Dispatch, ElementRef } from 'react';

interface AssetProps {
    asset: Asset,
    state: 'queued' | 'active' | 'exited',
    dispatch: Dispatch<{ type: 'nextSlide' } | { type: 'previousSlide' }>
}

function Video({ asset, state, dispatch }: AssetProps) {
    const videoElement = useRef<ElementRef<'video'>>(null);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (state !== 'active' || !hasLoaded) return;
        videoElement.current?.play();
    }, [state, hasLoaded]);

    return (
        <video
            ref={videoElement}
            controls={false}
            muted={true}
            preload={state === 'exited' ? 'none' : 'auto'}
            className="w-full h-screen"
            onCanPlayThrough={() => setHasLoaded(true)}
            onEnded={() => dispatch({ type: 'nextSlide' })}
        >
            <source src={asset.path} type={asset.mimeType} />
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;
