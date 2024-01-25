import axios from "axios";

const searchActions = (keyword) => async (dispatch) => {
    console.log(keyword)
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: keyword,
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: '50',
                order: 'date'
            },
            headers: {
                'X-RapidAPI-Key': '465862993amshf0a100eebf689a4p177f90jsn65ffa2d0d3f0',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        dispatch({ type: 'GET_SEARCH', payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

export default searchActions;
