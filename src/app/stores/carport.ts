import { makeAutoObservable, runInAction } from 'mobx';
import {
    checkGarageDoorApi
} from '../../api/carport';
import { succeeded } from '../../api/requestHelper';
import { IStoreResult } from './store';

export class CarPortStore {
    constructor() {
        makeAutoObservable(this);
    }

    public loading = true;
    public version = '';
    public doorStatus = 'unknown';

    public async checkGarageDoor(): Promise<IStoreResult> {
        const result: IStoreResult = {
            result: true,
            message: 'SUCCESS'
        };

        runInAction(() => {
            this.loading = true;
        });

        try {
            const response = await checkGarageDoorApi();
            if (succeeded(response)) {
                runInAction(() => {
                    this.doorStatus = response.data.status;
                });
            }
            else {
                result.result = false;
                result.message = response.data.message;
            }
        }
        catch (ex) {
            result.result = false;
            result.message = ex.message;
        }

        runInAction(() => {
            this.loading = false;
        });

        return result;
    }
}
