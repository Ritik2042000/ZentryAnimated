import React from 'react';

const BentoCard = ({ src, title, des, isComingSoon }) => {
    return (
        <div className='size-full relative '>
            <video
                src={src}
                loop
                muted
                autoPlay
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className="relative z-10 flex flex-col size-full justify-between p-5 text-blue-50">
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {des && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{des}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BentoCard;