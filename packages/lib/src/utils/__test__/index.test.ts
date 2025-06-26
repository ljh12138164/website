/**
 * @jest-environment jsdom
 */
import { type } from '../index';

describe('工具函数', () => {
  it('应该输出类型', () => {
    expect(type(1)).toBe('Number');
    expect(type('1')).toBe('String');
    expect(type(true)).toBe('Boolean');
    expect(type([])).toBe('Array');
    expect(type({})).toBe('Object');
    expect(type(null)).toBe('Null');
    expect(type(undefined)).toBe('Undefined');
  });
});
