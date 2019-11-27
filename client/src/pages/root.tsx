import React from 'react';
import AppWrapper from './AppWrapper';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Home/Home';
import AccountPage from './Account/Account';
import AdminPage from './Admin/Admin';
import CompaniesPage from './Companies/Companies';
import CompanyPage from './Company/Company';
import OffersPage from './Offers/Offers';
import OfferDetailsPage from './OfferDetails/OfferDetails';
import LoginPage from './Login/Login';
import RegisterPage from './Register/Register';
import NoMatchPage from './NoMatch/NoMatch';

const Root: React.FC = () => {
    return (
        <Switch>
            <Route path="/">
                <AppWrapper>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/companies" exact component={CompaniesPage} />
                        <Route path="/companies/:id" component={CompanyPage} />
                        <Route path="/offers" exact component={OffersPage} />
                        <Route path="/offers/:id" component={OfferDetailsPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="/admin" component={AdminPage} />
                        <Redirect to="/404" />
                        <Route path="/404" component={NoMatchPage} />
                    </Switch>
                </AppWrapper>
            </Route>
            <Route path="/404" render={() => <h1>Error 404 - there is no such route </h1>} />
        </Switch>
    );
};

export default Root;
