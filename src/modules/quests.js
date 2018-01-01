export const SET_HOVER_QUEST = 'quests/SET_HOVER_QUEST';
export const SET_SELECTED_QUEST = 'abilities/SET_SELECTED_QUEST';

const initialState = {
    hoverQuest: null,
    selectedQuest: null
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
      case SET_HOVER_QUEST:
        return {
          ...state,
          hoverQuest: action.payload
        }
  
      case SET_SELECTED_QUEST:
        return {
          ...state,
          selectedQuest: action.payload
        }
  
      default:
        return state
    }
}

export const setHoverQuest = (quest) => {
    return dispatch => {
      dispatch({
        type: SET_HOVER_QUEST,
        payload: quest
      })
    }
}

export const setSelectedQuest = (quest) => {
    return dispatch => {
      dispatch({
        type: SET_SELECTED_QUEST,
        payload: quest
      })
    }
}