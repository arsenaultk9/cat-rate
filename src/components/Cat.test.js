import React from 'react';

import Cat from './Cat';

import Adapter from 'enzyme-adapter-react-16';
import CatModel from '../models/CatModel';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('Cat tests', () => {
    it('Component renders', () => {
        const catModel = new CatModel(1, '', 3);
        shallow(<Cat catModel={catModel} />);
    });

    it('Component has good cat rating', () => {
        // ARRANGE
        const catModel = new CatModel(1, '', 4);

        // ACT
        const cat = shallow(<Cat catModel={catModel} />);

        // ASSERT
        const ratingComponent = cat.find('WithStyles(ForwardRef(Rating))');
        expect(ratingComponent.prop('defaultValue')).toEqual(4);
    });

    it('Component can set cat rating', () => {
        // ARRANGE
        let setValue = -1

        const setCatRating = (id, newValue) => {
            setValue = newValue
        };
        const catModel = new CatModel(1, '', 4);

        const cat = shallow(<Cat catModel={catModel} setCatRating={setCatRating} />);
        const ratingComponent = cat.find('WithStyles(ForwardRef(Rating))');

        // ACT
        ratingComponent.simulate('change', undefined, 5);

        // ASSERT
        expect(setValue).toEqual(5);
    })
});