import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
dayjs.extend(relativeTime);
dayjs.extend(utc);

export function formatTimeAgo(utcstring: string) {
  const date = dayjs.utc(utcstring);
  return date.fromNow();
}

export function formatDMY(utcstring: string) {
  const date = dayjs.utc(utcstring);
  return date.format("DD MMMM YYYY");
}
