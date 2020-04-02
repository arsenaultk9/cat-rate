function compare(catA, catB) {
    if (catA.rating > catB.rating) {
        return -1;
    }
    if (catA.rating < catB.rating) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

export default {
    compare
}