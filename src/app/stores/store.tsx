import { createContext, useContext } from 'react';
import { CarPortStore } from './carport';

export interface IStore {
    carPortStore: CarPortStore;
}

export interface IStoreResult {
    result: boolean;
    message: string;
    data?: any;
}

export const store: IStore = {
    carPortStore: new CarPortStore()
};

export const StoreContext = createContext(store);

export const useStore = (): IStore => {
    return useContext(StoreContext);
};
