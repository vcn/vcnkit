import { noop } from '../';

test('noop result is undefined', () => {
    expect(noop()).toBe(undefined);
});
