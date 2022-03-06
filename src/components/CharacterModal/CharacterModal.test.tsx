import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithProvider } from '../../TestRender';
import { CharacterModal } from './CharacterModal';


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
describe('CharacterDetails', () => {
    it('should not mount properly', () => {
        const { queryByTestId } = renderWithProvider(<CharacterModal char={dummyChar} open={false} onClose={jest.fn} />);
        expect(queryByTestId('characterModal')).toBeNull();
    });

    it('should mount properly and display char data', () => {
        const { queryByTestId, getByText } = renderWithProvider(<CharacterModal char={dummyChar} open={true} onClose={jest.fn} />);
        expect(queryByTestId('characterModal')).toBeTruthy();
        expect(getByText('Walter White')).toBeTruthy();
    });


    it('should call onClose properly', () => {
        const mockedOnClose = jest.fn();
        const { getByTestId } = renderWithProvider(<CharacterModal char={dummyChar} open={true} onClose={mockedOnClose} />);
        expect(getByTestId('characterModal')).toBeTruthy();

        fireEvent.click(getByTestId('closeModal'));
        expect(mockedOnClose).toHaveBeenCalled();

    });

});
