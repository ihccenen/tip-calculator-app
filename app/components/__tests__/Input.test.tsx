import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('input', () => {
  it('renders input', () => {
    render(<Input inputName="bill" labelText="Bill" value="" />);

    const input = screen.getByRole('textbox', { name: /bill/i });

    expect(input).toBeInTheDocument();
  });

  it('calls handlers', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input inputName="bill" labelText="Bill" value="" handleChange={handleChange} />);

    const input = screen.getByRole('textbox', { name: /bill/i });

    await user.type(input, '1');

    expect(handleChange).toBeCalledTimes(1);
  });
});
