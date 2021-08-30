import { GetDeviceId } from "../../utility/ApiHelperFunctions";

describe('Utility helper functions', () => {

    it('the device id generated twice should be same', async() => {
        const deviceId = await GetDeviceId();
        const deviceIdOne = await GetDeviceId();
        expect(deviceId).toBe(deviceIdOne);
    });
  
  
  });