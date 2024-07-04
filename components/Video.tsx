import type { Asset } from '@/types';

interface VideoProps {
    asset: Asset;
}

function Video({ asset }: VideoProps) {
    return (
        <video width="320" height="240" controls preload="auto">
            <source src={asset.path} type={asset.mimeType} />
            <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
            />
            Your browser does not support the video tag.
        </video>
    );
}

export default Video;
