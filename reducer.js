import {ADD_COMMENT} from './index.js';
const inicialState = {
	comments: [],
	users: []
};

function resucer(state, action) {
	if (!state) {
		return inicialState;
	}
	return state;
}

function rediucer(state = inicialState, action) {
	switch(action.type) {
		case ADD_COMMENT:
		return Object.assign({}, state, {
			comments: [
				{
					id: action.id,
					text: action.text,
					votes: 0
				},
				...state
			]
		})
	default:
		return state;
	}
}