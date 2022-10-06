const parseUrl = (url) => {
  const result = {};

  const parsedStr = url.split("?")[1].split("&");

  for (const item of parsedStr) {
    let str = item.split("=");
    if (str[0] in result) {
      if (Array.isArray(result[str[0]])) result[str[0]].push(str[1]);
      else result[str[0]] = [result[str[0]], str[1]];
    } else {
      result[str[0]] = str[1];
    }
  }
  console.log(result);
  return result;
};

const parseUrl2 = (url) => {
  const result = {};
  const regex = /(\w*=\w*)/g;
  const groups = url.match(regex);

  for (const match of groups) {
    let pair = match.split("=");
    console.log(pair);
    // tbd
  }

  console.log(result);
};

parseUrl2(
  "https://goodpup.com?colors=red&colors=green&colors=blue&fruit=banana"
);
