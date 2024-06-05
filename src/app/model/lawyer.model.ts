import {User} from "./user.model";

export interface Lawyer extends User {
  advmCode?: string,
  organisationId?: number,
  karma?: number,
  casesClosed?: number,
  areaId?: number,
}
