import shortId from "shortid";

const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [{id: 1, message: 'WAZZAA!',},
        {id: 2, message: 'Hi!',},
        {id: 3, message: 'How are you?',},
        {id: 4, message: 'Me good! You wont believe what happened to me yesterday!',}],


    dialogs: [{
        id: 1,
        name: 'Daniil',
        avatarsrc: 'https://rosanasflowers.ru/content/item/i10-E8F2F4CC-4563-4B4F-850D-2E03E09D0C88_1_201_a.jpeg',
    },
        {
            id: 2,
            name: 'Ruslan',
            avatarsrc: 'https://flowers-ukraine.com/image/cache/400-400/data/12332100/885_0.png',
        },
        {id: 3, name: 'Artur', avatarsrc: 'https://miro.medium.com/max/10944/1*FjfYKbYlB29iDonBxs-ncg.jpeg',},
        {
            id: 4,
            name: 'Eugen',
            avatarsrc: 'https://i.pinimg.com/736x/12/38/9d/12389de118bd877b32a2390d5ee6826f.jpg',
        },
        {id: 5, name: 'Leo', avatarsrc: 'https://flowers.ua/images/Flowers/ext/786_1.jpg',},],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: shortId.generate(), message: action.newMessageText}
                ]
            }
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => {
    console.log(newMessageText)
    return {type: ADD_MESSAGE, newMessageText}
};

export default dialogsReducer;