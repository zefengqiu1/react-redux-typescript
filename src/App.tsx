
import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppLayout, FormField, Input} from '@awsui/components-react';
import {Routes} from './routes';
import {Component} from 'react';
import { connect, Provider } from 'react-redux';

import {NewPageSectionView} from './components/NewPageSectionView';
import { pushCmsContent } from './actions/newPageActions';
import { RootState } from './reducers';

interface Iprops{
  dispatch?:any;
  cmsContent?:string;
}
export class App extends React.Component<Iprops> {
  public inputUpdate(cmsContent?:string):void {
    const {dispatch} = this.props;
    // const dispatch = useDispatch();
    dispatch(pushCmsContent(cmsContent));
    console.log(cmsContent);
}
  public render() {
      const {cmsContent} = this.props;
      console.log('shi:'+cmsContent);
      return (
          <div className='awsui-util-mb-m'>
              <FormField
              label="label"
              description="description"
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
}

const mapStateToProps = ({bank}:RootState) => {
  console.log("lailma????")
  return {
      cmsContent: bank.cmsContent
  };
};

// export default  App;

export default connect(mapStateToProps)(App);

