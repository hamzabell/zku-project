const reducer = (state, action) => {
    switch(action.type) {
        case 'INIT_STATE':
            return {...state, data: action.payload.data, errors: action.payload.errors, hasEnded: false };

        case 'SET_DATA':
            return { ...state, data: action.payload };

        case 'UPDATE_DATA':
            const updateData = state.data.map((current, i) => i == action.payload.index ? action.payload.newValue : current);
            return { ...state, data: updateData };

        case 'SET_ERROR':  
            return { ...state, errors: { ...state.errors, [action.payload.index]: action.payload.boolValue }}

        case 'SET_RESET_TIMER': 
            return { ...state, reset: action.payload }

        case 'RESTART_GAME':
            return { ...state, hasEnded: false } 

        case 'END_GAME':
            return { ...state, hasEnded: true }

            

        default:
            return { data: null };
    }
}
export default reducer