import { getShadow } from '../../';

test('returns undefined when elevation is below zero', () => {
    expect(getShadow(0)).toEqual(undefined);
    expect(getShadow(-1)).toEqual(undefined);
});

test('returns exact value when elevation is supported', () => {
    expect(getShadow(1)).toEqual(
        '0rem 0rem 0.125rem 0rem hsla(0, 0%, 0%, 0.14),0rem 0.125rem 0.125rem 0rem hsla(0, 0%, 0%, 0.12),0rem 0.0625rem 0.1875rem 0rem hsla(0, 0%, 0%, 0.2)',
    );
});

test('returns nearest value when elevation is unsupported', () => {
    expect(getShadow(25)).toEqual(
        '0rem 1.5rem 2.375rem 0rem hsla(0, 0%, 0%, 0.14),0rem 0.5625rem 2.875rem 0rem hsla(0, 0%, 0%, 0.12),0rem 0.6875rem 0.9375rem 0rem hsla(0, 0%, 0%, 0.2)',
    );
});
