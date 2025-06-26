import { encrypt } from '../index';

describe('加密模块', () => {
  it('应该能够加密字符串', () => {
    const data = '测试数据';
    const encrypted = encrypt(data);

    // 加密数据应该是非空字符串
    expect(typeof encrypted).toBe('string');
    expect(encrypted.length).toBeGreaterThan(0);

    // 加密数据应该与原始数据不同
    expect(encrypted).not.toBe(data);

    // 加密数据应该是base64编码
    expect(() => Buffer.from(encrypted, 'base64')).not.toThrow();
  });
  it('应该能够加密空字符串', () => {
    const data = '';
    const encrypted = encrypt(data);

    expect(typeof encrypted).toBe('string');
    expect(encrypted.length).toBeGreaterThan(0); // IV + 空加密数据
  });

  it('由于随机IV，相同输入应产生不同输出', () => {
    const data = '相同输入';
    const encrypted1 = encrypt(data);
    const encrypted2 = encrypt(data);

    expect(encrypted1).not.toBe(encrypted2);
  });
});
