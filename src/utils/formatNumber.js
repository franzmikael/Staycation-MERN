export default function formatNumber(number) {
    const formatNumbering = new Intl.NumberFormat("en-EN");
    return formatNumbering.format(number);
}