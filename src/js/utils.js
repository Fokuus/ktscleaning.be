export function formatDate(date) {
  return new Date(date).toLocaleDateString("nl-NL", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export function getCurrentYear() {
  return new Date().getFullYear();
}
