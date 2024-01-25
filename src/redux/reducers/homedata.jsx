function homereducer(state={getvideos:[]},action) {
    switch (action.type) {
        case 'Get-Videos':
            return{
                getVideos:action.payload
            }
        default:
            return state;
    }
}

export default homereducer;
