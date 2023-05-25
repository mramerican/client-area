import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'config/test-utils';

import Login from 'components/pages/Login/Login';

describe('Login', () => {
  it('render components', () => {
    render(<Login />);

    expect(screen.getByText(/Log In/)).toBeInTheDocument();

    expect(screen.getByText(/Username/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter username/)).toBeInTheDocument();

    expect(screen.getByText(/Password/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your password/),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/Remember me/)).toBeInTheDocument();

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/Forgot password/)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Sign In/)).toBeInTheDocument();
  });
});
