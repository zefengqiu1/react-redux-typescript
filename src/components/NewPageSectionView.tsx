import {connect} from 'react-redux';
import { Button,Input,FormField } from '@awsui/components-react';
import * as React from 'react';
import {pushCmsContent} from '../actions/newPageActions'
import { RootState } from '../reducers';


interface INewPageProps {
    dispatch: any;

    cmsContent?:string;
    
}

export class NewPageSectionView extends React.Component<
    INewPageProps
>{
    constructor(props:INewPageProps) {
        super(props)
    }

    public inputUpdate(cmsContent?:string):void {
        const {dispatch} = this.props;
        // const dispatch = useDispatch();
        dispatch(pushCmsContent(cmsContent));
        //console.log(this.props.dispatch);
        //this.props.dispatch(pushCmsContent(cmsContent));
        //console.log(this.props.dispatch);
        //dispatch(pushCmsContent(cmsContent));
        console.log(cmsContent);
    }
    public render() {
        const {cmsContent} = this.props;
        console.log('shi:'+cmsContent);
        return (
            <div className='awsui-util-mb-m'>
                <FormField
                label="nihao"
                description="laiya"
                >
                    <Input
                        placeholder ='please enter'
                        value = {cmsContent?cmsContent:''}
                        onChange ={(e) => this.inputUpdate(e.detail.value.trim())}
                    />
                </FormField>
                <div>see:{this.props.cmsContent}</div>
            </div>
        );
    }


 
};

const mapStateToProps = ({bank}:RootState) => {
    console.log("mapstatetoprop")
    return {
        cmsContent: bank.cmsContent
    };
};

export default connect(mapStateToProps)(NewPageSectionView);


