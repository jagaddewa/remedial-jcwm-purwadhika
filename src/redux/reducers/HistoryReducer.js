const INITIAL_STATE = {
    history: []
}

const HistoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_HISTORY':
            return {
                history: action.payload
            }
        default:
            return state
    }
}

export default HistoryReducer