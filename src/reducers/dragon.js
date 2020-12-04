import { ADD_DRAGON,ON_CHANGE, REMOVE_DRAGON, REVERSE_ORDER } from '../constants/actions';

// Définition de la source de vérité
const stateInit = {
    dragons : [],
    dragon: '',
    error: '',
}

// Définition du Reducer
const dragonsReducer = (state = stateInit, action = {}) => {

    // gestion des actions du Reducer
    switch(action.type){

        case ON_CHANGE:

            const { value } = action.payload;

            return {
                ...state,
                dragon : value,
                error: ''
            };

        case ADD_DRAGON:

            const dragons = [...state.dragons];

            if( state.dragon.trim().length === 0 )
            {
                return {
                    ...state,
                    error: 'Veuillez saisir un nom du dragon !'
                };
            }

            else if( dragons.includes( state.dragon ) )
            {
                return {
                    ...state,
                    error: 'On le connait se dragon !'
                };
            }

            dragons.push( state.dragon );

            // On doit retourner un nouveau state (sans toucher à la source de vérité)
            return {
                ...state,
                dragon : '',
                dragons: dragons,
                error: ''
            };

        case REMOVE_DRAGON:
            let registeredDragons = [...state.dragons];
            registeredDragons.splice(action.payload.target, 1)

            return {
                ...state,
                dragons: registeredDragons,
                dragon: '',
                error: ''
            };

        case REVERSE_ORDER:
            let dragonsList = [...state.dragons];

            return {
                ...state,
                dragons: dragonsList.reverse(),
                dragon: '',
                error: ''
            };

        // Si aucun changement de state
        default:
            return state;
    }

}

export default dragonsReducer;
