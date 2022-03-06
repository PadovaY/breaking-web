import React from 'react';
import { renderWithProvider } from '../../TestRender';
import { CharacterFeed } from './CharacterFeed';

jest.mock('axios');
describe('CharacterFeed', () => {
    it('should render search properly ', () => {
        const { getByTestId } = renderWithProvider(<CharacterFeed />);
        expect(getByTestId('searchBar')).toBeTruthy();
    });
    it('should render filters properly ', () => {
        const { getByTestId } = renderWithProvider(<CharacterFeed />);
        expect(getByTestId('filter-Season')).toBeTruthy();
        expect(getByTestId('filter-Status')).toBeTruthy();
    });
})