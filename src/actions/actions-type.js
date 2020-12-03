import { ON_CHANGE, ADD_DRAGON, REMOVE_DRAGON, REVERSE_ORDER } from '../constants/actions';

export const setDragon = (payload) => {

    return {
        type: ON_CHANGE, payload
    }
}

export const addDragon = () => {

    return {
        type: ADD_DRAGON
    }
}

export const removeDragon = (payload) => {

    return {
        type: REMOVE_DRAGON, payload
    }
}

export const reverseOrder = () => {

    return {
        type: REVERSE_ORDER
    }
}
