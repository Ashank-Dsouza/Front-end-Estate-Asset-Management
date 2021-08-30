import FingerprintJS from '@fingerprintjs/fingerprintjs'

export function GetBaseURL(protocol, host, port) {
    return protocol + "://" + host + ":" + port;
}

export async function GetDeviceId() {
    const fpPromise = FingerprintJS.load()
    const fp = await fpPromise
    const result = await fp.get()
    // This is the visitor identifier:
    const deviceId = result.visitorId
    return deviceId;
}