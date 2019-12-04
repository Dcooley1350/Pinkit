export default (state = {}, action) => {
  switch(action.type) {

  case 'ADD_POST':
    const { name, date, topic, post, id, upvotes, downvotes } = action;

    let newState = Object.assign({}, state, {
      [id]: {
        name: name,
        date: date,
        topic: topic,
        post: post,
        upvotes: upvotes,
        downvotes: downvotes
      }
    });
    return newState;

    case 'UP_VOTE':
    const { id } = action
    const newState = Object.assign({},state);
    new
    return newState;
    
    case 'DOWN_VOTE':
    return newState;
  default:
    return state;
  }
};
 
