

import {PUSH_NEW_PAGE} from '../action-types';
import {IupdateAction} from '../actions/newPageActions';

interface INewPageState {
    cmsContent?:string;
}

const reducer = (
    state: INewPageState = {
        cmsContent:'25'
    }, 
    action: IupdateAction

    ): INewPageState => {
    switch (action.type){
        case PUSH_NEW_PAGE:
            return {
                ...state,
                cmsContent:action.cmsContent
            };
        default:
            return state
    }
}

export default reducer