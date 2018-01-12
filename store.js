import { createStore } from 'redux';
import reducers from './reducers.js';
const store = createStore(reducers);

store.subscribe(() => console.log('zmiana w stanie')); //nasłuchiwanie na zmiany w stanie aplikacji

var unsubscibe = store.subscribe(() => console.log('zmiana w stanie'));
unsubscribe(); // wyłączenie nasłuchiwania na stan aplikacji

store.subscribe(() => console.log(store.getState())) // zwracanie stanu aplikacji

// pseudokod wykorzystuje tworzenie elementów, które renderują stan aplikacji
store.subscribe(() => {
    const comments = store.getState().comments;
    ReactDOM.render(<CommentsList comments={comments} />, mountingPoint)
});