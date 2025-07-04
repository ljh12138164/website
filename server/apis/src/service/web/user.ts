import { eq } from 'drizzle-orm';
import db from '../../db';
import { usersTable } from '../../db/schema';
import type { Role, SignInParams, SignUpParams } from '../../types';
import { comparePasswordWithSalt, createToken, hashPassword } from '../../utils/crypto';
import { toPromise } from '../../utils/promise';

/**
 *  ### 用户登陆
 */
export const signIn = async ({ email, password }: Omit<SignInParams, 'name'>) => {
  // 查询用户是否
  const user = await toPromise(
    db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1)
      .then((res) => res[0]),
  );

  if (!user) {
    throw new Error('用户不存在');
  }
  // 比较密码
  const isPasswordValid = await comparePasswordWithSalt(password, user.salt!, user.password!);
  if (!isPasswordValid) throw new Error('密码错误');
  const token = await toPromise(createToken({ ...user, userId: user.id }));
  return {
    ...user,
    token,
  };
};

/**
 *  ### 用户注册
 */
export const signUp = async ({ email, password, name }: Omit<SignUpParams, 'salt'>) => {
  // 查询用户是否存在
  const user = await toPromise(
    db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1)
      .then((res) => res[0]),
  );
  if (user) throw new Error('用户已存在');

  // 加密密码
  const passwordResult = await toPromise(hashPassword(password), { autoThrow: false });
  if (!passwordResult) throw new Error('密码加密失败');

  // 插入用户
  const newUser = await toPromise(
    db
      .insert(usersTable)
      .values({
        email,
        password: passwordResult.hashedPassword,
        salt: passwordResult.salt,
        name,
      })
      .returning()
      .then((res) => res[0]),
  );
  if (!newUser) throw new Error('服务器错误');
  const userInfo = {
    userId: newUser.id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role as Role,
    avatar: newUser.avatar,
  };

  const token = await toPromise(createToken(userInfo), { autoThrowMessage: 'token生成失败' });
  return {
    ...userInfo,
    token,
  };
};
