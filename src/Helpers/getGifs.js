export const getGifts = async(category)=>{
    const url= `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=Dp47iisvZqAo6y5thqoCQFrjxMS9RunK`
    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })    

    return gifs;
}