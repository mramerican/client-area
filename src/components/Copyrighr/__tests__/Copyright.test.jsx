import { render } from '@testing-library/react';

import Copyright from 'components/Copyrighr/Copyright';

describe('Copyright', () => {
  test('initial', () => {
    const { getByText, asFragment } = render(<Copyright />);
    const linkElement = getByText(/Evoplay/i);

    expect(linkElement).toBeInTheDocument();
    expect(asFragment(<Copyright />)).toMatchSnapshot();
  });
});
