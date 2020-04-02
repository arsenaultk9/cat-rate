import React from 'react';

import Cat from "./Cat";

import catA from '../images/cat-a.jpg';
import catB from '../images/cat-b.jpg';
import catC from '../images/cat-c.jpg';
import catD from '../images/cat-d.jpg';
import catE from '../images/cat-e.jpg';

import './Cats.css';
import CatModel from '../models/CatModel';
import CatUtils from '../utils/CatUtils';


class Cats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats:
                [
                    new CatModel(1, catA, 2.5),
                    new CatModel(2, catB, 2.5),
                    new CatModel(3, catC, 2.5),
                    new CatModel(4, catD, 2.5),
                    new CatModel(5, catE, 3),
                ]
        };
    }

    setCatRating(catId, newRating) {
        console.log('setCatRating');

        const catsRatingUpdated = this.state.cats.map((catModel) => {
            if (catModel.id !== catId) {
                return catModel;
            }

            return { ...catModel, ...{ rating: newRating } }
        });

        this.setState({ cats: catsRatingUpdated })
    }

    render() {
        const cats = this.state.cats;
        console.log('re-rendered');
        const catComponents = cats.sort(CatUtils.compare).map((catModel) => {
            return (<Cat key={catModel.id} catModel={catModel}
                setCatRating={(catId, newRating) => this.setCatRating(catId, newRating)} />)
        })

        return (
            <div>
                {catComponents}
            </div>
        )
    }
}

export default Cats;