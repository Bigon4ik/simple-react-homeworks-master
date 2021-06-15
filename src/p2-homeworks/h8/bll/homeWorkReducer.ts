import {UserType} from '../HW8';
import {act} from 'react-dom/test-utils';

export const homeWorkReducer = (state: Array<UserType>, action: any): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b)=>{
                if (a.name>b.name)return 1
                else if (a.name<b.name)return -1
                else return 0
            })
            return action.payload === 'up'?newState:newState.reverse()
        }
        case 'check': {
            return state.filter(a=>a.age>=action.payload)
        }
        default: return state
    }
}