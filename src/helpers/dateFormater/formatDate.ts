export const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000; // get difference in seconds
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(diff / 3600);
  const days = Math.floor(diff / 86400);

  if (minutes === 0) {
    return "just now";
  } else if (minutes === 1) {
    return "1 minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours === 1) {
    return "1 hour ago";
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days === 1) {
    return "1 day ago";
  } else {
    const options: Intl.DateTimeFormatOptions = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    };
    return date.toLocaleString("en-US", options);
  }
};
