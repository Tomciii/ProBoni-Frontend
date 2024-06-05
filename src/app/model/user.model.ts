export interface User {
  id: number;
  email: string,
  firstName: string;
  lastName: string;
  address: string,
  creationDate?: Date,
  dateOfBirth?: Date,
  lastModified?: Date,
}
