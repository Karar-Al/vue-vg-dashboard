/**
 * @param {number} date
 * @param {string} locale
 */
export function getFormattedDateTitle(date, locale = "sv-SE") {
  return new Date(date).toLocaleString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function getFormattedEntryTime(startDate, endDate, locale = "sv-SE") {
  const timeFormat = (date) =>
    new Date(date).toLocaleTimeString(locale, {
      hour: "2-digit",
    });

  return timeFormat(startDate) + (endDate ? ` - ${timeFormat(endDate)}` : "");
}

export function sortByStartDate(items) {
  const arrCopy = [...items];

  return arrCopy.sort((a, b) => a.startDate - b.startDate);
}
