export const formatExpirationDate = (rawDate) => {
    const dateObject = new Date(rawDate);
    const options = {month: '2-digit', year: '2-digit'};
    return dateObject.toLocaleDateString('en-US', options);
};
