import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state from "./Redux/state";
import store from "./Redux/state";

test('renders learn react link', () => {
  render(<App store={state}
              addPost={store.addPost}
              changePostCallback={store.changePostCallback}
              posts={store._state.profilePage.posts}
              message={store._state.profilePage.newPostText}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
