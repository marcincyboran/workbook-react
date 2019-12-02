import React, { useEffect, useState } from 'react';
import './Account.scss';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router';
import Panel from '../../components/Panel/Panel';
import PanelLeft from '../../components/Panel/PanelLeft/PanelLeft';
import PanelRight from '../../components/Panel/PanelRight/PanelRight';
import PanelUser from '../../components/Panel/PanelUser/PanelUser';
import PanelNav from '../../components/Panel/PanelNav/PanelNav';
import PanelNavLink from '../../components/Panel/PanelNav/PanelNavLink/PanelNavLink';
import AccountProfile from './AccountProfile/AccountProfile';
import AccountOffers from './AccountOffers/AccountOffers';
import AccountNewOffer from './AccountNewOffer/AccountNewOffer';
import AccountCompany from './AccountCompany/AccountCompany';
import AccountMessages from './AccountMessages/AccountMessages';
import PropTypes, { InferProps } from 'prop-types';

const accountProps = {
    user: PropTypes.objectOf(PropTypes.any),
};
type accountPropsType = InferProps<typeof accountProps>;

const AccountPage: React.FC<accountPropsType> = ({ user }) => {
    const match = useRouteMatch();

    return (
        <Panel>
            <PanelLeft>
                <PanelUser firstName={user!.firstName} lastName={user!.lastName} />
                <PanelNav>
                    <PanelNavLink to={`${match.url}`} icon="cog" exact>
                        Profil
                    </PanelNavLink>
                    <PanelNavLink to={`${match.url}/offers`} icon="star">
                        Offers
                    </PanelNavLink>
                    <PanelNavLink to={`${match.url}/company`} icon="bookmark" exact>
                        Company
                    </PanelNavLink>
                    <PanelNavLink to={`${match.url}/messages`} icon="chat" exact>
                        Messages
                    </PanelNavLink>
                </PanelNav>
            </PanelLeft>
            <PanelRight>
                <Switch>
                    <Route path="/account" exact render={() => <AccountProfile user={user} />} />
                    <Route path="/account/offers" exact component={AccountOffers} />
                    <Route path="/account/offers/new" component={AccountNewOffer} />
                    <Route path="/account/company" component={AccountCompany} />
                    <Route path="/account/messages" component={AccountMessages} />
                    <Redirect to="/account" />
                </Switch>
            </PanelRight>
        </Panel>
    );
};

const mapeStateToProps = (state: AppStateType) => ({
    user: state.system.user || {
        firstName: 'John',
        lastName: 'Doe',
        address: 'Dunno, Warsaw 00-000',
        phone: '123 333 321',
        email: 'john.doe@gmail.com',
        facebook: 'https://www.facebook.com/',
        linkedin: 'https://www.linkedin.com/',
    },
});

export default connect(mapeStateToProps)(AccountPage);
