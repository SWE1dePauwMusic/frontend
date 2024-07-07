

async function switchDevice(accessToken, deviceName) {
    console.log("Test", accessToken, deviceName)
    try {
        const url = '/auth/switchDevice';
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deviceName: deviceName,
                play: true,
            }),
        };

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error switching device: ${response.statusText} - ${errorData.message}`);
        }

        const responseData = await response.json();
        console.log(responseData.data)
        localStorage.setItem('deviceId', responseData.data.deviceId);
        return responseData;
    } catch (error) {
        console.error('Error switching device:', error);
        throw error;
    }
}

module.exports = switchDevice;