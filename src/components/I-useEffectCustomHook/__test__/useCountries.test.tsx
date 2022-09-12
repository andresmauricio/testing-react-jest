import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import { useCountires } from '../hooks/useCountries'
// I-useEffectCustomHook
declare var global: any;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ name: { common: 'Unitend states' } }, { name: { common: 'Colombia' } }]),
  }),
) as jest.Mock;

describe('Countries Component', () => {
  test('I-useEffectCustomHook - should render Countries component remote services file', async () => {
    // screen.debug();
    const { result, waitForNextUpdate } = renderHook(() => useCountires())
    await waitForNextUpdate();
    console.log(result.current.countries);
    expect(result.current.countries.length).toEqual(2);
  });
});
