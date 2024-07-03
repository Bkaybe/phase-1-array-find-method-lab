const superbowlWin = (object) => {
  for (let key in object) {
    if (object.hasOwnProperty(key) && object[key].result === "W") {
      return object[key].year;
    }
  }

  return undefined;
};
