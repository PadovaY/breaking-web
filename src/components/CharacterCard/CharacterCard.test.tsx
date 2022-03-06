import React from 'react';
import { fireEvent } from '@testing-library/react';
import { CharacterCard } from './CharacterCard';
import { renderWithProvider } from '../../TestRender';


const dummyChar = {
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: [
        "High School Chemistry Teacher",
        "Meth King Pin"
    ],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploa...",
    status: "Deceased",
    appearance: [1, 2, 3, 4, 5],
    nickname: "Heisenberg",
    portrayed: "Bryan Cranston",
    better_call_saul_appearance: []
}
describe('CharacterCard', () => {
    it('should mount properly', () => {
        const { getByTestId } = renderWithProvider(<CharacterCard char={dummyChar} onClick={jest.fn} />);
        expect(getByTestId('charCard')).toBeTruthy();
    });

    it('should call onClick properly', () => {
        const mockedOnClick = jest.fn();
        const { getByTestId } = renderWithProvider(<CharacterCard char={dummyChar} onClick={mockedOnClick} />);
        fireEvent.click(getByTestId('charCard'));
        expect(mockedOnClick).toHaveBeenCalled();
    });

});
