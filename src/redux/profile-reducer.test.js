import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you today?', likesCount: 12,},
        {id: 2, message: 'It\'s my first post1!', likesCount: 23,},],
};



test('length of posts should be incremented', () => {
    //1. test data - исходные данные
    let action = addPost('it-kamasutra');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
    expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
    //1. test data - исходные данные
    let action = addPost('it-kamasutra');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
    expect(newState.posts[2].message).toBe('it-kamasutra');
});

test('after deleting length should be decrement', () => {
    //1. test data - исходные данные
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
    expect(newState.posts.length).toBe(1);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data - исходные данные
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectations
    expect(newState.posts.length).toBe(2);
});