const AllValues = (
  state = { nationData: null, stateData: null, colorData: null },
  action
) => {
  switch (action.type) {
    case "setStateData":
      state = { ...state, stateData: action.payload };
      return state;
    case "setColorData":
      state = { ...state, colorData: action.payload };
      return state;
    case "setColor_stateData":
      state = {
        ...state,
        colorData: action.payload.color,
        stateData: action.payload.state,
      };
    default:
      return state;
  }
};

export default AllValues;
