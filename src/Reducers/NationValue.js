const NationValue = (state = { nationData: null }, action) => {
  switch (action.type) {
    case "setNationData":
      state = { ...state, nationData: action.payload };
      return state;

    default:
      return state;
  }
};

export default NationValue;
