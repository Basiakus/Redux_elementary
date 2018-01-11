const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
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

function thumbUp(like, id) { //kreator funkcji +1
	return {
		like + 1,
		id
	};
}

function thumbUp(disLike, id) { //kreator funkcji -1
	return {
		disLike + 1,
		id
	};
}