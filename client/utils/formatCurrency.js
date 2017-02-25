export default function formatCurrency(val) {
  return `$${(val / 100).toFixed(2)}`
}
