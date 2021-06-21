const initState = {
    themes : ''
};

export const themeReducer = (state:InitialStateTheme = initState, action: ChangeThemeActionType): InitialStateTheme => { // fix any
    switch (action.type) {
        case 'ADD_THEM': {
            return {...state,themes:action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: string) => {
    return ({type:'ADD_THEM',theme}as const)
};

//type

type ChangeThemeActionType = ReturnType<typeof changeThemeC>

export type InitialStateTheme=typeof initState
