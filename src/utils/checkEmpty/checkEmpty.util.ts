type Value = string | number | boolean | object | Array<unknown> | undefined | null;

export const checkEmpty = (value: Value) => {
  let isEmpty = false;

  if (value === undefined || value === null) {
    return isEmpty = true;
  }

  if (typeof value === "string" && value.trim() === "") {
    return isEmpty = true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return isEmpty = true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    return isEmpty = true;
  }

  return isEmpty;
};
