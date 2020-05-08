import React from 'react';

import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import CatModel from '../models/CatModel';
import Cats from './Cats';
import CatsApi from '../api/CatsApi';
configure({ adapter: new Adapter() });

describe('Cats tests', () => {
    it('Component renders', () => {
        shallow(<Cats />);
    });

    it('Cats are ordered by higest rated to lowest', () => {
        // ARRANGE
        const catModelA = new CatModel(1, '', 1);
        const catModelB = new CatModel(2, '', 2);
        const catModelC = new CatModel(3, '', 3);

        const catModel = [catModelA, catModelB, catModelC];
        CatsApi.getCats = jest.fn().mockReturnValue(catModel);

        // ACT
        const cats = shallow(<Cats />);

        // ASSERT
        const catComponents = cats.find('Cat');
        expect(catComponents.length).toEqual(3);

        expect(catComponents.get(0).props.catModel).toBe(catModelC);
        expect(catComponents.get(1).props.catModel).toBe(catModelB);
        expect(catComponents.get(2).props.catModel).toBe(catModelA);
    });

    it('Cat ratings can be modified', () => {
        // ARRANGE
        const catModelA = new CatModel(1, '', 1);
        const catModelB = new CatModel(2, '', 2);
        const catModelC = new CatModel(3, '', 3);

        const catModel = [catModelA, catModelB, catModelC];
        CatsApi.getCats = jest.fn().mockReturnValue(catModel);

        const cats = shallow(<Cats />);

        // ACT
        cats.instance().setCatRating(2, 4);

        // ASSERT
        const catComponents = cats.find('Cat');
        expect(catComponents.length).toEqual(3);

        expect(catComponents.get(0).props.catModel.id).toBe(catModelB.id);
        expect(catComponents.get(1).props.catModel.id).toBe(catModelC.id);
        expect(catComponents.get(2).props.catModel.id).toBe(catModelA.id);
    });
});