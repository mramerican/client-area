import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'config/test-utils';

import Copyright from 'components/Copyrighr/Copyright';

describe('Copyright', () => {
  it('render components', () => {
    render(<Copyright />);

    expect(screen.getByText(/All rights reserved./)).toBeInTheDocument();
  });
});
