export enum UserRoles {
  Admin = 'Admin',
  Teacher = 'Teacher',
  Student = 'Student',
}

export interface User {
  username: string;
  password: string;
  role: UserRoles;
  id: number;
}
