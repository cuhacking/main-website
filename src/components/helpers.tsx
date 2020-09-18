export function formatDate(published_at: any) {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC'
  ]

  const month = new Date(published_at).getMonth()

  const formatted_published_at =
    new Date(published_at).getDate() +
    ' ' +
    months[month] +
    ' ' +
    new Date(published_at).getFullYear()

  return formatted_published_at
}
