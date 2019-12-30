import produce from 'immer';

const INITIAL_STATE = {
    profile: null,
}

export default function user(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCCESS': {
                draft.profile = action.payload.user;
                break;
            }
            case '@user/UPDATE_PROFILE_SUCCESS': {
                draft.profile = action.payload.profile;
                break;
            }
            default:
        }
    });
    // switch(action.type) {
    //     case '@auth/SIGN_IN_SUCCESS':
    //         return produce(state, draft => {
    //             draft.profile = action.payload.user;            
    //         })
    //     case '@user/UPDATE_PROFILE_REQUEST':
    //         return produce(state, draft => {
    //             draft.profile = action.payload.profile;            
    //         })
    //     default:
    //         return state;
    // }
}