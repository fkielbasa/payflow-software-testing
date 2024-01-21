
export const getCurrencySymbol = (currency) => {
    switch (currency) {
        case 'PLN':
            return 'zł';
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        default:
            return '';
    }
};
