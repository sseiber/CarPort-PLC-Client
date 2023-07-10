import {
    IServiceResponse,
    requestHelper
} from './requestHelper';

export async function checkGarageDoorApi(): Promise<IServiceResponse> {
    return requestHelper({
        method: 'post',
        url: `/api/v1/process/control`,
        data: {
            garageDoorId: 0,
            action: 'check'
        }
    });
}
