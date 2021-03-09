import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you today?', likesCount: 12,},
                {id: 2, message: 'It\'s my first post1!', likesCount: 23,},],
            newPostText: '',
        },

        dialogsPage: {
            messages: [{id: 1, message: 'WAZZAA!',},
                {id: 2, message: 'Hi!',},
                {id: 3, message: 'How are you?',},
                {id: 4, message: 'Me good! You wont believe what happened to me yesterday!',}],
            newMessageText: '',


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
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;