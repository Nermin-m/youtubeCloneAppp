import axios from "axios";
const homeActions=(data)=>async(dispatch)=>{
try {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            part: 'snippet',
            maxResults: '50',
            q:data,
        },
        headers: {
            'X-RapidAPI-Key': '465862993amshf0a100eebf689a4p177f90jsn65ffa2d0d3f0',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        dispatch({type:'Get-Videos',payload:response.data});
    } catch (error) {
        console.error(error);
    }
} catch (error){
    console.log(error)
}
}
export default homeActions;
