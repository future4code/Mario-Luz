import { User } from './User';

export class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number;
  protected static BENEFITS_VALUE: number = 400;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    adimissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    this.admissionDate = adimissionDate;
    this.baseSalary = baseSalary;
  }

  public getAdmissionDate(): string {
    return this.admissionDate;
  }

  public getBasesalary(): number {
    return this.baseSalary;
  }

  public calculateTotalSalary(): number {
    return this.baseSalary + Employee.BENEFITS_VALUE;
  }
}
