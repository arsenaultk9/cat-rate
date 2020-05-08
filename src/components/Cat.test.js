import React from 'react';

import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Cat from './Cat';
import CatModel from '../models/CatModel';
configure({ adapter: new Adapter() });

describe('Cat tests', () => {
    it('Component renders', () => {
        const catModel = new CatModel(1, '', 3);
        shallow(<Cat catModel={catModel} />);
    });

    it('Cat rating is specified', () => {
        // ARRANGE
        const catModel = new CatModel(1, '', 4);

        // ACT
        const cat = shallow(<Cat catModel={catModel} />);

        // ASSERT
        const ratingComponent = cat.find('[data-test-id="ratingComponent"]');
        expect(ratingComponent.prop('defaultValue')).toEqual(4);
    });

    it('Cat rating is specified', () => {
        // ARRANGE
        let setValue = -1;
        const setCatRating = (id, newValue) => {
            setValue = newValue
        };

        const catModel = new CatModel(1, '', 4);
        const cat = shallow(<Cat catModel={catModel} setCatRating={setCatRating} />);
        const ratingComponent = cat.find('[data-test-id="ratingComponent"]');

        // ACT
        ratingComponent.simulate('change', undefined, 2);

        // ASSERT
        expect(setValue).toEqual(2);
    });
})