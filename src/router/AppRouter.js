import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import {createBrowserHistory} from 'history'
import Notelist from  '../container/notelist'
import TPage from '../components/tPage';
import TrashData from '../container/trash'

// let history = createBrowserHistory()


export const history = createBrowserHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/metapad" component={Notelist} />
        <PublicRoute path="/trash" component={TrashData} />

        {/* <PrivateRoute path="/create" component={AddExpensePage} /> */}
        {/* <PrivateRoute path="/edit/:id" component={EditExpensePage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

// import React from 'react';
// import {BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom' // react-roter-dom für WEb anwendungen ..-native für mobile // https://reacttraining.com/react-router/web/guides/quick-start
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
// import NotFoundPage from '../components/NotFoundPage';
// import Header from '../components/Header'
// import LoginPage from '../components/LoginPage';


// const AppRouter = () => {

// return(
//   <BrowserRouter> 
//       <div>
//           <Header />
//       <Switch>
//          <Route path="/" component={LoginPage} exact={true} />
//          <Route path="/dashboard" component={ExpenseDashboardPage} />
//           <Route path ="/create" component= {AddExpensePage} />    
//           <Route path ="/edit/:id" component= {EditExpensePage} />
//           <Route path ="/help" component= {HelpPage} /> 
//           <Route component= {NotFoundPage} />      
//       </Switch>
//       </div>
//   </BrowserRouter>

// )
// }

// export default AppRouter