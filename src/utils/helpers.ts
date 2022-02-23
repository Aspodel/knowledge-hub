export const formatDatetime = (datetime: Date): string => {
  //   var date = new Date(Date.UTC(2021, 2, 1, 1, 2, 0));
  var options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };

  return datetime
    .toLocaleDateString("en-US", options)
    .replace(/([0-9]+),\s([0-9]+),\s/g, "$1, $2 at ");
};

// Join multiple classname
export const joinClassnames = (classNames: string[]) =>
  classNames.filter(Boolean).join(" ").trim();
