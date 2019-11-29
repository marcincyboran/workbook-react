import React from 'react';
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
import AccountCompany from './AccountCompany/AccountCompany';
import AccountMessages from './AccountMessages/AccountMessages';

const AccountPage: React.FC = () => {
    const match = useRouteMatch();

    return (
        <Panel>
            <PanelLeft>
                <PanelUser />
                <PanelNav>
                    <PanelNavLink to={`${match.url}`} icon="cog">
                        Profil
                    </PanelNavLink>
                    <PanelNavLink to={`${match.url}/offers`} icon="star">
                        Offers
                    </PanelNavLink>
                    <PanelNavLink to={`${match.url}/company`} icon="bookmark">
                        Company
                    </PanelNavLink>
                    <PanelNavLink to={`${match.url}/messages`} icon="chat">
                        Messages
                    </PanelNavLink>
                </PanelNav>
            </PanelLeft>
            <PanelRight>
                <Switch>
                    <Route path="/account" exact component={AccountProfile} />
                    <Route path="/account/offers" component={AccountOffers} />
                    <Route path="/account/company" component={AccountCompany} />
                    <Route path="/account/messages" component={AccountMessages} />
                    <Redirect to="/account" />
                </Switch>
            </PanelRight>
        </Panel>
    );
};

const mapeStateToProps = (state: AppStateType) => ({
    currUser: state.system.user,
});

export default connect(mapeStateToProps)(AccountPage);
