import { render, screen, act } from '@testing-library/react'
import Countries from "../Countries";
// I-useEffectRemoteService
declare var global: any;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ name: { common: 'Unitend states' } }, { name: { common: 'Colombia' } }]),
  }),
) as jest.Mock;

describe('Countries Component', () => {
  test('I-useEffectRemoteService - should render Countries component remote services file', async () => {
    await act(async () => render(<Countries />) as any)
    const container = screen.getAllByRole("contentinfo");
    // screen.debug();
    expect(container.length).toEqual(2);
  });
});
