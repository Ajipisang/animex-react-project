import axios from "axios";



export const getTopAnime=async(callback)=>{
    try{
        axios.get("https://api.jikan.moe/v4/seasons/now").then(res => callback(res.data)).catch(err=>console.log(err));
    }catch (err){
        console.log(err);
    }
}


export const getRecomended = async (callback) => {
    try {
        // Membuat fungsi debounced untuk API call
        const debouncedCallback = debounce(() => {
            axios.get("https://api.jikan.moe/v4/recommendations/anime")
                .then(res => callback(res.data))
                .catch(err => console.log(err));
        }, 500); // Tunggu 500ms setelah pemanggilan terakhir

        // Panggil fungsi debounced
        debouncedCallback();
    } catch (err) {
        console.log(err);
    }
};