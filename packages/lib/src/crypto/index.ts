// import * as crypto from 'node:crypto';

// const key = '1234567890123456';

// /** aes128Cbc */
// export const encrypt = (data: string) => {
//   const iv = crypto.randomBytes(16);
//   const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
//   return encodeBase64(Buffer.concat([iv, cipher.update(data), cipher.final()]));
// };

// /** aes128Cbc */
// export const decrypt = (data: string) => {
//   const buffer = Buffer.from(data, 'base64');
//   const iv = buffer.subarray(0, 16);
//   const encryptedData = buffer.subarray(16);
//   const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
//   return Buffer.concat([decipher.update(encryptedData), decipher.final()]).toString('utf-8');
// };

// const encodeBase64 = (data: Buffer) => {
//   return data.toString('base64');
// };

// // 删除控制台输出，避免测试时产生额外输出
// // console.log(encrypt("1234567890"));
// // const encrypted = encrypt("1234567890");
// // console.log(decrypt(encrypted));
