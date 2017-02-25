export default function formatDate (date) {
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  return day + '/' + (monthIndex + 1) + '/' + year
}
