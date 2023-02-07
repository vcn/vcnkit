import { extract } from '../';

test('extracts single property from props', () => {
    expect(
        extract(
            {
                thisIsAProp: 'thisIsAPropValue',
                thisIsAlsoAProp: 'thisIsAlsoAPropValue',
            },
            ['thisIsAlsoAProp'],
        ),
    ).toEqual({ thisIsAlsoAProp: 'thisIsAlsoAPropValue' });
});
