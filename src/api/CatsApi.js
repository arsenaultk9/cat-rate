import CatModel from '../models/CatModel';

import catA from '../images/cat-a.jpg';
import catB from '../images/cat-b.jpg';
import catC from '../images/cat-c.jpg';
import catD from '../images/cat-d.jpg';
import catE from '../images/cat-e.jpg';

function getCats() {
    return [
        new CatModel(1, catA, 2.5),
        new CatModel(2, catB, 2.5),
        new CatModel(3, catC, 2.5),
        new CatModel(4, catD, 2.5),
        new CatModel(5, catE, 3),
    ]
}

export default {
    getCats
}