import React from 'react';
import burger from '../../images/gallery/burger.jpg';
import chicken_kacchi from '../../images/gallery/chicken_kacchi.jpg';
import murog_fulau from '../../images/gallery/murog_fulau.jpg';
import mutton_biriani from '../../images/gallery/mutton_biriani.jpg';
import porota_murog_fulau from '../../images/gallery/porota_murog_fulau.jpg';
import shahi_chicken_biriani from '../../images/gallery/shahi_chicken_biriani.jpg';
import PageTitle from '../Shared/PageTitle';

const Gallery = () => {
    return (
        <div className='my-10 px-5 md:px-20'>
            <PageTitle title="Gallery"></PageTitle>

            <h2 className='text-5xl mt-5 mb-8 text-center'>Gallery</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center'>
                <img className='w-max-96 h-80 h-min-60 rounded' src={burger} alt="Burger" />
                <img className='w-max-96 h-80 h-min-60 rounded' src={chicken_kacchi} alt="Chicken Kacchi" />
                <img className='w-max-96 h-80 h-min-60 rounded' src={murog_fulau} alt="Murog Fulau" />
                <img className='w-max-96 h-80 h-min-60 rounded' src={mutton_biriani} alt="Mutton Biriani" />
                <img className='w-max-96 h-80 h-min-60 rounded' src={porota_murog_fulau} alt="Porota Murog Fulau" />
                <img className='w-max-96 h-80 h-min-60 rounded' src={shahi_chicken_biriani} alt="Shahi Chicken Biriani" />
                <img className='w-max-96 h-80 h-min-60 rounded' src={chicken_kacchi} alt="Chicken Kacchi" />
                <img className='w-max-96 h-80 h-min-60 rounded' src={murog_fulau} alt="Murog Fulau" />
            </div>
        </div>
    );
};

export default Gallery;