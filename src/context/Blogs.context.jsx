// import context automation helper:
import createDataContext from './createDataContext';

// UTILITIES:
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// action types:
// toDo: move action types to another file.
const ADD_BLOG_POST = 'add_blog';
const REMOVE_BLOG_POST = 'remove_blog';

// blogs reducer: controller:
const blogReducer = (state, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      return [...state, { title: 'title', desc: 'desc', id: uuidv4() }];

    case REMOVE_BLOG_POST:
      const filteredState = state.filter((item) => item.id !== action.payload);
      return [...filteredState];

    default:
      return state;
  }
};

// blogs action types: set actions
const addBlog = (dispatch) => () => dispatch({ type: ADD_BLOG_POST });
const removeBlog = (dispatch) => (id) =>
  dispatch({ type: REMOVE_BLOG_POST, payload: id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlog, removeBlog },
  []
);
