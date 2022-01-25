import React, { useEffect, useState } from 'react'
import { useFecthGifs } from '../../Hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';


export const GiftGrid = ({category}) => {
    const {data:images, loading} = useFecthGifs(category);

    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Loading...</p>}
        <div className="cardGrid">
            {
                images.map(img=>(
                    <GiftGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }        </div>
        </>
    )
}
