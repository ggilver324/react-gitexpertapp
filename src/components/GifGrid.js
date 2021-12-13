import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrigItem } from './GifGrigItem';



export const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs( category );

    console.log( loading );
    // ` `

    return (
        <>
            <h1 className="animate__animated animate__fadeIn"> { category } </h1>
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                <ul>
                    {
                        images.map( img => (
                           <GifGrigItem
                                key={ img.id }
                                { ...img }
                                />
                                
                        ))

                    }
                </ul>

            </div>
        </>
    )
}

// images.map( img => {
//     <GifGrigItem
//         key={ img.id }
//         { ...img }
//         //img={ img }
//     />
    
// })

