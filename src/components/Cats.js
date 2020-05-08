import React from 'react';

import Cat from "./Cat";

import './Cats.css';

import CatUtils from '../utils/CatUtils';
import CatsApi from '../api/CatsApi';


class Cats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: CatsApi.getCats()
        };
    }

    setCatRating(catId, newRating) {

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