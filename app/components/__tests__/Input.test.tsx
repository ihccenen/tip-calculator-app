import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('input', () => {
  it('renders input', () => {
    render(<Input name="bill" value="" />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('calls handlers', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input name="bill" value="" handleChange={handleChange} />);

    const input = screen.getByRole('textbox');

    await user.type(input, '1');

    expect(handleChange).toBeCalledTimes(1);
  });
});
