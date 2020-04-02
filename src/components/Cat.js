import React from "react";
import Rating from '@material-ui/lab/Rating';

class Cat extends React.Component {

    render() {
        const catModel = this.props.catModel;

        return (
            <div>
                <img src={catModel.image} className="Cat-Pic" alt={`cat${catModel.id}`} />
                <Rating
                    name={`half-rating ${catModel.id}`}
                    defaultValue={catModel.rating}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        this.props.setCatRating(catModel.id, newValue);
                    }} />
            </div>
        );
    }
}

export default Cat;