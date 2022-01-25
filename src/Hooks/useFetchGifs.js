import { useEffect, useState } from "react";
import { getGifts } from "../Helpers/getGifs";

export const useFecthGifs = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    
    useEffect(() => {
        getGifts(category)
            .then(imgs=>{
                setState({
                    data: imgs,
                    loading: false
                })
            })        
    }, [category])

    return state;
}