export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
import uuid from uuid;
//Akcje
{
    type: ADD_COMMENT,
    text: 'My first comment !'
};

{
    type: REMOVE_COMMENT,
    id: 20 // przykładowy id komentarza do usunięcia
};

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'wyedytowany tekst komentarza'
};

{
	type: THUMB_UP_COMMENT,
	like: 0,
	id
};

{
	type: THUMB_DOWN_COMMENT,
	disLike: 0,
	id
}
//kreatory akcji

function addComment(text) { // kreator akcji dodawania komentarza
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

function removeComment(id) { // kreator akcji usuwania komentarza
	return {
		type: REMOVE_COMMENT,
		id !== id
	};
}

function editComment(id, text) { // kreator funkcji edycji
	return {
		type: EDIT_COMMENT,
		text,
		id
	};
}

function thumbUp(votes, id) { //kreator funkcji +1
	return {
		type: THUMB_UP_COMMENT,
		votes + 1,
		id
	};
}

function thumbUp(votes, id) { //kreator funkcji -1
	return {
		type: THUMB_DOWN_COMMENT,
		votes - 1,
		id
	};
}

const boundAddComment = text => dispatch(addComment(text));