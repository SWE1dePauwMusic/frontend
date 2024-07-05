const redirect_uri = '/auth/token';
const refresh_uri = '/auth/refreshToken';

async function getToken() {
    try {
        const response = await fetch(redirect_uri);
        const json = await response.json();
        console.log(json)
        const accessToken = json.data.authTokenData.access_token;
        const refreshToken = json.data.authTokenData.refresh_token;

        if (accessToken && accessToken.length > 2) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            return accessToken;
        } else {
            throw new Error('Invalid access token');
        }
    } catch (error) {
        console.error('Error fetching token:', error);
        return '';
    }
}


async function refreshAccessToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        console.error('No refresh token found in localStorage');
        return;
    }
    try {
        const response = await fetch(refresh_uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ refresh_token: refreshToken })
        });

        if (!response.ok) {
            throw new Error('Failed to refresh access token');
        }
        const json = await response.json();
        const newAccessToken = json.data.access_token;
        console.log("RefreshToken successfully")
        // Store the new access token in localStorage or use it directly
        localStorage.setItem('accessToken', newAccessToken);
        return newAccessToken
    } catch (error) {
        console.error('Error:', error);
    }
}

// Refresh the access token every 3000ms (3 seconds)




module.exports = {getToken, refreshAccessToken}