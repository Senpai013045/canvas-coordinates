/**
 *
 * @param {string} str String in format "[0,0][1080,80]"
 * @returns {{
 *  x1: number,
 * y1: number,
 * x2: number,
 * y2: number
 * }}
 */
export const extractBounds = (str) => {
  let [start, end] = str
    .slice(1, -1)
    .split("][")
    .map((x) => x.split(",").map((y) => parseInt(y)));
  return {
    x1: start[0],
    y1: start[1],
    x2: end[0],
    y2: end[1],
  };
};
