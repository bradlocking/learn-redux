// A reducer takes in two things:

// 1. the action (Info about what happened)
// 2. copy of the current state

function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :

		// Return the updated state
		const i = action.index;

		// Update the state
		return [
			...state.slice(0,i), // before the one we are updating
			{
				...state[i], 
				likes: state[i].likes + 1
			},
			...state.slice(i + 1) // before the one we are updating
		]
	} 
	return state;
} 

export default posts;