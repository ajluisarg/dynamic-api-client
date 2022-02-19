export const apiClientGenerator = (apiBaseUrl) => {
    return new Proxy({}, {
        get: (_target, prop) => {
            return async(resourceId) => {
                const response = await fetch(`${apiBaseUrl}/${prop}/${resourceId}`);
                return await response.json();
            }
        }
    });
}
