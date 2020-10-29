const initialState = {
  playerName: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME: {
      return {
        ...state,
        playerName: action.name,
      };
    }
  }
}

export default reducer;
