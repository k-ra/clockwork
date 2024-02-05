export function parseHour(hourString) {
  let [hour, minute, period] = hourString.split(/[:\s]/);
  hour = parseInt(hour) % 12 + (period.toLowerCase() === 'pm' ? 12 : 0);
  return hour;
}
  
export function isInTimeRange(checkHour, start, end) {
  let startHour = parseHour(start);
  let endHour = parseHour(end);
  let currentHour = parseHour(checkHour);
  return currentHour >= startHour && currentHour < endHour;
}

export function formatHour(hour) {
  const suffix = hour >= 12 && hour < 24 ? 'PM' : 'AM';
  const formattedHour = ((hour + 11) % 12 + 1); // Converts 0-23 hour format to 1-12 format
  return `${formattedHour}:00 ${suffix}`;
}