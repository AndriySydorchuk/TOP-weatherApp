import { parseISO, format } from "date-fns";

export function formatDate(dateStr) {
  const date = parseISO(dateStr);
  return format(date, "EEEE, MMMM d, yyyy");
}
