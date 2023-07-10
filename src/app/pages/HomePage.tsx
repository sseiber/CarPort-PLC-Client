import React, { FC } from 'react';
import { Grid, Message } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

const HomePage: FC = observer(() => {
    const message = 'CarPort PLC Client';

    return (
        <Grid style={{ padding: '5em 5em' }}>
            <Grid.Row>
                <Grid.Column>
                    <Message size={'huge'}>
                        <Message.Header>CarPort PLC Client</Message.Header>
                        <p>{message}</p>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
});

export default HomePage;
