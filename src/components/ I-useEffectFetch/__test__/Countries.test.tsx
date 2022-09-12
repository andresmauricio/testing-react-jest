import { render, screen, act } from '@testing-library/react'
import Countries from "../Countries";

declare var global: any;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ name: { common: 'Unitend states' } }, { name: { common: 'Colombia' } }]),
  }),
) as jest.Mock;

describe('Countries Component', () => {
  test('should render Countries component', async () => {
    await act(async () => render(<Countries />) as any)
    const container = screen.getAllByRole("contentinfo");
    // screen.debug();
    expect(container.length).toEqual(2);
  });
});
