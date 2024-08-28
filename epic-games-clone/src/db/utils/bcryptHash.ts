import bcryptjs from 'bcryptjs';

export const hash = (plainPassword: string): string => bcryptjs.hashSync(plainPassword, 10);

export const compare = (plainPassword: string, hashedPassword: string): boolean => {
  return bcryptjs.compareSync(plainPassword, hashedPassword);
}