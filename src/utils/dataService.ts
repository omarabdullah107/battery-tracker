import chargingData from '../data/backend-response.json'
import { ChargingState } from '../../../models/types'

// Function that fetches the JSON file and save into this function to be used for fetching the data.
export const fetchingChargingState = async (): Promise<ChargingState[]> => {
    if (chargingData?.chargingStates) {
        return chargingData.chargingStates;
    } else {
        throw new Error('charging state data not found');
    }
};
