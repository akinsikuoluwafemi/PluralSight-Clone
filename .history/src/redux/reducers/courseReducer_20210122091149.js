
const initialState = {
    title: ''
}

export default function courseReducer  (state = [], action)  {
    switch(action.type){
        case 'CREATE_COURSE':
            return []
                ...state, title: action.course
            ]
    }
}