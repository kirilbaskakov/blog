import showDate from './showDate';

test('correctly show date in en locale', () => {
  const timestamp = Date.UTC(2022, 7, 12);
  const date = showDate(timestamp, 'en');
  expect(date).toBe('Aug 12, 2022');
});

test('correctly show date in ru locale', () => {
  const timestamp = Date.UTC(2022, 7, 12);
  const date = showDate(timestamp, 'ru');
  expect(date).toBe('12 авг. 2022 г.');
});
