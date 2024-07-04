import { Asset } from '@/types';
import axios from 'axios';
import useSWR from 'swr';

import Video from './Video';
import Image from './Image';

const getAssetList = async () => {
    try {
        const response = await axios.get<Asset[]>('/api');
        return response.data;
    } catch (exception: any) {
        throw { message: exception.response.data.message };
    }
};

function AssetLoader() {
    const { data: assets, error, isLoading } = useSWR('assets', getAssetList);

    if (error) return error.message;
    if (isLoading) return <div>loading...</div>;

    return assets?.map((asset, index) => (
        <div key={index}>
            {asset.mimeType.startsWith('video') ? (
                <Video asset={asset} />
            ) : (
                <Image asset={asset} />
            )}
        </div>
    ));
}

export default AssetLoader;
