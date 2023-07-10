import React, { FC } from 'react';
import { Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Menu, Grid, Image, Dropdown, Icon } from 'semantic-ui-react';
import { InfoDialogServiceProvider } from './components/InfoDialogContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import UserPage from './pages/user/UserPage';

export const AppRoutes = {
    Home: '/',
    User: '/user',
    Config: '/config'
};

const App: FC = observer((props: any) => {
    const location = useLocation();

    const logoMenuTitle = `CarPort PLC Client`;
    const logoMenuLink = AppRoutes.Home;

    const trigger = (
        <span>
            <Icon name={'user'} /> {'scott (current)'}
        </span>
    );

    const userNavItem = (
        <Dropdown item trigger={trigger}>
            <Dropdown.Menu>
                < Dropdown.Item href="/api/v1/auth/signout">
                    <Icon name="sign out alternate" />
                    <span>&nbsp;&nbsp;Sign out</span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown >
    );

    return (
        <ErrorBoundary>
            <InfoDialogServiceProvider>
                {/* {PRODUCTION ? null : <DevTools />} */}
                <Menu fixed="top" inverted color="grey" style={{ padding: '0em 5em' }}>
                    <Menu.Item as={Link} to={logoMenuLink} header>
                        <Image size={'mini'} src={`/assets/applogo50.png`} style={{ marginRight: '1.5em' }} />
                        {logoMenuTitle}
                    </Menu.Item>
                    <Menu.Menu position="right">
                        {userNavItem}
                    </Menu.Menu>
                </Menu>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Switch>
                                <Route exact path={AppRoutes.Home} component={HomePage} />
                                <Route exact path={AppRoutes.User} component={UserPage} />
                                <Redirect from={location.pathname} to="/" />
                                {props.children}
                            </Switch>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Menu fixed="bottom" inverted color="grey" style={{ padding: '1em 5em' }}>
                </Menu>
            </InfoDialogServiceProvider>
        </ErrorBoundary>
    );
});

export default App;
