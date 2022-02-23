import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {addPost} from "./Redux/state";

test('renders learn react link', () => {
  render(<App dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
              posts={state.profilePage.posts}  addPost={addPost}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
