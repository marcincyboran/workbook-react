import React, { useEffect } from 'react';
import AppWrapper from './AppWrapper';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Home/Home';
import AccountPage from './Account/Account';
import AdminPage from './Admin/Admin';
import CompaniesPage from './Companies/Companies';
import CompanyDetailsPage from './CompanyDetails/CompanyDetails';
import OffersPage from './Offers/Offers';
import OfferDetailsPage from './OfferDetails/OfferDetails';
import LoginPage from './Login/Login';
import RegisterPage from './Register/Register';
import NoMatchPage from './NoMatch/NoMatch';
import Helpers from '../helpers/shared';

const Root: React.FC = () => {
    const fetchUser = async () => {
        await Helpers.getUser();
    };

    useEffect(() => {
        console.log('Root init');
        fetchUser();
    }, []);

    return (
        <Switch>
            <Route path="/">
                <AppWrapper>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/home" component={HomePage} />
                        <Route path="/companies" exact component={CompaniesPage} />
                        <Route path="/companies/:id" component={CompanyDetailsPage} />
                        <Route path="/offers" exact component={OffersPage} />
                        <Route path="/offers/:id" component={OfferDetailsPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/account" component={AccountPage} />
                        <Route path="/admin" component={AdminPage} />
                        <Route path="/404" component={NoMatchPage} />
                        <Redirect to="/404" />
                    </Switch>
                </AppWrapper>
            </Route>
            <Route path="/404" render={() => <h1>Error 404 - there is no such route </h1>} />
        </Switch>
    );
};

export default Root;
