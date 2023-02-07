import { omit } from '../';

test('omits single property from props', () => {
    expect(
        omit(
            {
                thisIsAProp: 'thisIsAPropValue',
                thisIsAlsoAProp: 'thisIsAlsoAPropValue',
            },
            ['thisIsAlsoAProp'],
        ),
    ).toEqual({ thisIsAProp: 'thisIsAPropValue' });
});
