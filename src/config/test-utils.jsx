import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

const AppProvider = ({ children }) => {
  const initialState = {
    auth: {
      token: '',
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};
const customRender = (ui, options) =>
  render(ui, { wrapper: AppProvider, ...options });

export { customRender as render };
