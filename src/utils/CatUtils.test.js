import CatModel from '../models/CatModel';
import CatUtils from './CatUtils';

describe('CatUtils tests', () => {
    it('Cats are ratted', () => {
        // ARRANGE
        const highRateCat = new CatModel(1, '', 5);
        const lowRateCat = new CatModel(1, '', 2);

        const cats = [lowRateCat, highRateCat];

        // ACT
        const catsRated = cats.sort(CatUtils.compare);

        // ASSERT
        expect(catsRated[0]).toBe(highRateCat);
        expect(catsRated[1]).toBe(lowRateCat);
    })
});