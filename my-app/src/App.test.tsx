import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state from "./Redux/state";

test('renders learn react link', () => {
  render(<App dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
              posts={state.profilePage.posts}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
