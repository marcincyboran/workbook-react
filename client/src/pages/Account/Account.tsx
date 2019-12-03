import React from 'react';
import './Account.scss';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { User } from '../../redux/system/duck/types';
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

type AccountProps = { user: User };

const AccountPage: React.FC<AccountProps> = ({ user }) => {
    const match = useRouteMatch();
    return (
        <Panel>
            <PanelLeft>
                <PanelUser firstName={user.firstName} lastName={user.lastName} />
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
                    <Route path="/account/offers" exact render={() => <AccountOffers userID={user._id} />} />
                    <Route path="/account/offers/create" render={() => <AccountNewOffer user={user} />} />
                    <Route path="/account/company" component={AccountCompany} />
                    <Route path="/account/messages" component={AccountMessages} />
                    <Redirect to="/account" />
                </Switch>
            </PanelRight>
        </Panel>
    );
};

const mapeStateToProps = (state: AppStateType) => ({
    user: state.system.user,
});

export default connect(mapeStateToProps)(AccountPage);
