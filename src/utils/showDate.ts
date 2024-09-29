const showDate = (timestamp: number, locale: string): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export default showDate;
