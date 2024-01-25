function detailReducer(state={getvideo:{}},action) {
    switch (action.type) {
        case 'GET-VIDEO':
            return{
                ...state,
                getVideo:action.payload
            }
        default:
            return state;
    }
}

export default detailReducer;
