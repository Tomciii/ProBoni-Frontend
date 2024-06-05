export interface Register {
  id: number,
  email: string,
  userName: string,
  firstName: string,
  lastName: string,
  address: string,
  creationDate?: Date,
  dateOfBirth?: string,
  advmCode?: string,
  organisationId?: number | null,
  karma?: number,
  casesClosed?: number,
  areaId?: number,
  lastModified?: Date,
  password?: string,
  isLawyer?: boolean
  phoneNumber: string
}
