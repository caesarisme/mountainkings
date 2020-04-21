export default function dateTime(value, format='date') {
  if (!value) {
    return 'Дата неизвестна'
  }

  const options = {};

  if (format.includes('date')) {
    options.weekday = 'long'
    options.day = '2-digit';
    options.month = 'short';
    // options.year = 'numeric';
  }

  if (format.includes('time')) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.second = '2-digit';
  }

  return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(value));
}
