import CatModel from '../models/CatModel';
import CatUtils from './CatUtils';

describe('CatUtils tests', () => {
    it('compare, cat with higher rating is first', () => {
        // ARRANGE
        const catGoodRating = new CatModel(1, 'img', 4);
        const catBadRating = new CatModel(2, 'img', 2);

        const cats = [catBadRating, catGoodRating];

        // ACT
        const catsByHighestOrders = cats.sort(CatUtils.compare);

        // ASSERT
        expect(catsByHighestOrders[0]).toBe(catGoodRating);
        expect(catsByHighestOrders[1]).toBe(catBadRating);
    })
})