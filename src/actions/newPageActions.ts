import {Action, Dispatch} from 'redux';
//import static from const


export interface IupdateAction extends Action {
    cmsContent?:string;
}

export const pushCmsContent = (
    // updateAction?:IupdateAction
    cmsContent?: string,
    // templateType?:string
) => async (dispatch:Dispatch)=>{
    console.log('pushCmsContent action trigger');
    dispatch({
        type: 'PUSH_NEW_PAGE',
        cmsContent
    });
};