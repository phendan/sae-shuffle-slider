import { useEffect, useReducer, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import useSWR from 'swr';

import Video from '../Video';
import Image from '../Image';

import type { Asset as AssetInterface } from '@/types';
import type { DependencyList } from 'react';

const getAssetList = async () => {
    try {
        const response = await axios.get<AssetInterface[]>('/api');
        return response.data;
    } catch (exception: any) {
        throw { message: exception.response.data.message };
    }
};

function ShuffleSlider() {
    const { data: assets, error, isLoading } = useSWR('assets', getAssetList);

    const [sliderState, dispatch] = useReducer(
        (
            state: { currentSlideIndex: number, queuedSlideIndex: number },
            action: { type: 'nextSlide' } | { type: 'previousSlide' }
        ) => {
            if (typeof assets === 'undefined') return state;

            if (action.type === 'nextSlide') {
                return {
                    currentSlideIndex: state.currentSlideIndex !== assets.length - 1 ?
                        state.currentSlideIndex + 1 :
                        0,
                    queuedSlideIndex: state.queuedSlideIndex !== assets.length - 1 ?
                        state.queuedSlideIndex + 1 :
                        0
                };
            }

            if (action.type === 'previousSlide') {
                return {
                    currentSlideIndex: state.currentSlideIndex === 0 ?
                        assets.length - 1 :
                        state.currentSlideIndex - 1,
                    queuedSlideIndex: state.queuedSlideIndex === 0 ?
                        assets.length - 1 :
                        state.queuedSlideIndex - 1
                };
            }

            return state;
        },
        { currentSlideIndex: 0, queuedSlideIndex: 1 }
    );

    if (error) return error.message;
    if (isLoading) return <div></div>;

    return assets?.map((asset, index) => {
        const Asset = asset.mimeType.startsWith('video') ? Video : Image;
        const state = sliderState.currentSlideIndex === index ?
            'active' :
            sliderState.queuedSlideIndex === index ?
                'queued' :
                'exited';
        return (
            <motion.div
                className="absolute inset-0 z-50 w-full h-full"
                initial={false}
                animate={state}
                variants={{
                    queued: { x: '100%', display: 'block', transition: { duration: 0 } },
                    active: { x: 0, display: 'block' },
                    exited: { x: '-100%', transitionEnd: { display: 'none' } }
                }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                key={index}
            >
                <Asset
                    asset={asset}
                    state={state}
                    dispatch={dispatch}
                />
            </motion.div>
        );
    });
}

export default ShuffleSlider;
