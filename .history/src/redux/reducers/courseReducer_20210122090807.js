
const initialState = {
    title: ''
}

export default function courseReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_COURSE':
            return {
                ...state, title:action.course
            }
    }
}