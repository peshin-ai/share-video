type Value = string | number | boolean | object | Array<unknown>;

export const checkEmpty = (value: Value) => {
  let isEmpty = false;

  if (value === undefined || value === null) {
    isEmpty = true;
  }

  if (typeof value === "string" && value.trim() === "") {
    isEmpty = true;
  }

  if (Array.isArray(value) && value.length === 0) {
    isEmpty = true;
  }

  if (typeof value === "object" && Object.keys(value).length === 0) {
    isEmpty = true;
  }

  return isEmpty;
};
