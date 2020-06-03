import { Employee } from './Employee';

export class Seller extends Employee {
  private salesQuantity: number;
  private static SELLING_COMMISSION: number = 5;

  public getSalesQuantity(): number {
    return this.salesQuantity;
  }

  public setSalesQuantity(quantity: number): void {
    this.salesQuantity = quantity;
  }
  public calculateTotalSalary(): number {
    return (
      this.baseSalary +
      Employee.BENEFITS_VALUE +
      Seller.SELLING_COMMISSION * this.salesQuantity
    );
  }
}
