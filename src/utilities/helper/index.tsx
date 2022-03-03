export const calcTime = (id: number) => {
  const count = Math.ceil(id / 5);
  let cup = "";
  for (let i = 0; i < count; i++) {
    cup += "☕️";
  }
  return cup;
};

export const calcDate = (id: number) => {
  const displayDate = Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(id * (24 * 1000 * 60 * 60)));
  return displayDate;
};
