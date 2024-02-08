export function parseEventTime(event) {
  const formatTime = (time) => {
    const period = time.getHours() >= 12 ? "PM" : "AM";
    const hours = time.getHours() % 12 || 12;
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} ${period}`;
  };

  const start = formatTime(event.start);
  const end = formatTime(event.end);
  const type = event.backgroundColor === "rgb(110, 224, 110)" ? "available" : "possible";

  return { start, end, type };
}
