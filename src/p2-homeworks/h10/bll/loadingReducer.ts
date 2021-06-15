import {AppStoreType} from './store';

type ActionsType =
    |ReturnType<typeof loadingAC>


const initState = {
    loading: false,

}
export type InitialStateType = typeof initState


export const loadingReducer = (state:InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        case 'IS-LOADING': {

            return {...state, loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => ({type: 'IS-LOADING', loading} as const) // fix any