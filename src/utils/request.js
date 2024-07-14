const CustomError = require('./errorHandling'); // Ensure the path to CustomError is


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

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const responseData = await response.json();
            return responseData;
        }
        return response;

    } catch (error) {
        throw new CustomError(500, error.message || 'Internal server error');
    }

}

module.exports = makeRequest;
