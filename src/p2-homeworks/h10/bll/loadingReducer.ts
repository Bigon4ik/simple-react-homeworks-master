import {AppStoreType} from './store';

type ActionsType =
    |ReturnType<typeof loadingAC>


const initState = {
    loading: true,

}
export type InitialStateType = typeof initState
export const loadingReducer = (state:InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {

            return {...state, loading: action.value}
        }
        default:
            return state
    }
}

export const loadingAC = (value: boolean) => ({type: 'IS-LOADING', value} as const) // fix any