/**
 * ### 输出类型
 */
export const type = (value: unknown) => {
  return Object.prototype.toString.call(value).slice(8, -1);
};
