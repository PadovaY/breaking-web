import React from 'react';
import { renderWithProvider } from '../../TestRender';
import { CharacterDetails } from './CharacterDetails';


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
    it('should mount properly', () => {
        const { getByTestId } = renderWithProvider(<CharacterDetails char={dummyChar} />);
        expect(getByTestId('charDetails')).toBeTruthy();
    });

});
