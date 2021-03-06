import * as React from 'react';
import { ThemeProvider } from '@hackclub/design-system';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AppMain from './components/AppMain/AppMain';
import ThankYou from './components/ThankYou/ThankYou';
import { Provider } from 'mobx-react';
import shopStore from './stores/shopStore';

class App extends React.Component {
  public render() {
    return (
      <Provider shopStore={shopStore}>
        <ThemeProvider webfonts={true}>
          <Switch>
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/" exact={true} component={AppMain} />
            <Redirect to="/" />
          </Switch>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRouter(App);
