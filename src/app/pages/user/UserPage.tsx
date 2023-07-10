import React, { FC } from 'react';
import { Message, Grid } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useAsyncEffect } from 'use-async-effect';
import { useStore } from '../../stores/store';
import { useInfoDialog, showInfoDialog } from '../../components/InfoDialogContext';

const UserPage: FC = observer(() => {
    const {
        carPortStore
    } = useStore();
    const infoDialogContext = useInfoDialog();

    useAsyncEffect(async isMounted => {
        const response = await carPortStore.checkGarageDoor();

        if (!isMounted()) {
            return;
        }

        if (!response.result) {
            await showInfoDialog(infoDialogContext, {
                catchOnCancel: false,
                variant: 'info',
                title: 'Error',
                description: `Unable to get user's configuration.`
            });
        }
    }, []);

    return (
        <Grid style={{ padding: '5em 5em' }}>
            <Grid.Row>
                <Grid.Column>
                    <Message size={'huge'} info>
                        <Message.Header>CarPort PLC Client</Message.Header>
                        <p>{`(backend service-v${'x.x.x'})`}</p>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
});

export default UserPage;
