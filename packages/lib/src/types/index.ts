export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

export const preprocess = (value: unknown) => {
  if (isNumber(value)) {
    return value * 2;
  }
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  if (typeof value === 'boolean') {
    return !value;
  }
  return null;
};
