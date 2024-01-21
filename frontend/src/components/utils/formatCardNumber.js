export function formatCardNumber(accountNumber) {
    if (!accountNumber) {
        return '';
    }

    const accountString = accountNumber.toString();
    const chunks = [];

    for (let i = 0; i < accountString.length; i += 4) {
        chunks.push(accountString.substring(i, i + 4));
    }

    return chunks.join(' ');
}
