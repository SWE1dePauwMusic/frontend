const CustomError = require('./errorHandling'); // Ensure the path to CustomError is correct

async function makeRequest(options) {
    const { method, url, headers, body, params } = options;

    // Helper function to convert params object to query string
    const buildQueryString = (params) => {
        return Object.keys(params)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
            .join('&');
    };

    // Append query parameters to the URL if they exist
    let requestUrl = url;
    if (params) {
        const queryString = buildQueryString(params);
        requestUrl = `${url}?${queryString}`;
    }

    try {
        const response = await fetch(requestUrl, {
            method,
            headers,
            body: body ? body : null,
        });

        if (!response.ok) {
            // Parse the error response if it exists
            const errorData = await response.json();
            throw new CustomError(response.status, errorData.error?.message || errorData);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const responseData = await response.json();
            return responseData;
        }
        return response;

    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code outside of the range of 2xx
            throw new CustomError(error.response.status, error.response.data.error.message || error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            throw new CustomError(500, 'No response received from server');
        } else {
            // Something happened in setting up the request that triggered an Error
            throw new CustomError(500, error.message);
        }
    }
}

module.exports = makeRequest;
