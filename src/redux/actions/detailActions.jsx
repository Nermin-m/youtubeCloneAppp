import axios from "axios";

const detailActions = (id) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/videos',
            params: {
                part: 'contentDetails,snippet,statistics',
                id: id,
            },
            headers: {
                'X-RapidAPI-Key': '465862993amshf0a100eebf689a4p177f90jsn65ffa2d0d3f0',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            },
        };

        const response = await axios.request(options);
        dispatch({ type: 'GET-VIDEO', payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export default detailActions;
