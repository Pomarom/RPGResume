export const SET_HOVER_ABILITIES = 'abilities/SET_HOVER_ABILITIES';
export const SET_SELECTED_ABILITIES = 'abilities/SET_SELECTED_ABILITIES';

const initialState = {
    hoverAbility: null,
    selectedAbility: null
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case SET_HOVER_ABILITIES:
        return {
          ...state,
          hoverAbility: action.payload
        }
  
      case SET_SELECTED_ABILITIES:
        return {
          ...state,
          selectedAbility: action.payload
        }
  
      default:
        return state
    }
}

export const setHoverAbility = (ability) => {
    return dispatch => {
      dispatch({
        type: SET_HOVER_ABILITIES,
        payload: ability
      })
    }
}

export const setSelectedAbility = (ability) => {
    return dispatch => {
      dispatch({
        type: SET_SELECTED_ABILITIES,
        payload: ability
      })
    }
}