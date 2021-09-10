import * as React from 'react';
import { Route,Switch } from 'react-router';
import {HashRouter} from 'react-router-dom';
import {PAGE} from './constants/page'
import {NewPageSectionView} from './components/NewPageSectionView';

export class Routes extends React.Component {
    public render() {
        return <HashRouter>
            <Switch>
                <Route exact path={PAGE.NewPage} component={NewPageSectionView} />
            </Switch>
        </HashRouter>
    }
}