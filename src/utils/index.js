export function formatNumberToPrice(price) {
    const brl = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });
    return brl.format(price)
}