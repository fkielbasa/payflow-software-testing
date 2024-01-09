export function formatAccountNumber(accountNumber) {
    if (!accountNumber) {
        return '';
    }

    const accountString = accountNumber.toString();
    const firstTwoDigits = accountString.substring(0, 2);
    const remainingDigits = accountString.substring(2);

    const chunks = [];
    for (let i = 0; i < remainingDigits.length; i += 4) {
        chunks.push(remainingDigits.substring(i, i + 4));
    }

    return `${firstTwoDigits} ${chunks.join(' ')}`;
}
