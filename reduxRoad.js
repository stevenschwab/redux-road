const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  };
  
  const manageState = (state = initialWagonState, action) => {
    switch (action.type) {
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        };
      }
      case 'travel': {
        if (state.supplies - (20 * action.payload) < 0) {
          return { ...state };
        }
        return {
          ...state,
          supplies: state.supplies - (20 * action.payload),
          distance: state.distance + (10 * action.payload),
          days: state.days + action.payload
        }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        }
      }
      case 'sell': {
        return {
          ...state,
          supplies: state.supplies - 20,
          cash: state.cash + 5
        }
      }
      case 'buy': {
        return {
          ...state,
          supplies: state.supplies + 25,
          cash: state.cash - 15
        }
      }
      case 'theft': {
        return {
          ...state,
          cash: state.cash - (state.cash / 2)
        }
      }
      default: {
        return state;
      }
    }
  };
  
  let wagon = manageState(undefined, {});
  console.log(wagon);
  wagon = manageState(wagon, {type: 'travel', payload: 1});
  console.log(wagon);
  wagon = manageState(wagon, {type: 'gather'});
  console.log(wagon);
  wagon = manageState(wagon, {type: 'tippedWagon'});
  console.log(wagon);
  wagon = manageState(wagon, {type: 'travel', payload: 3});
  console.log(wagon);