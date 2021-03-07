import Employee from "../models/Employee"

export default {

  render(employee: Employee) {
    return {
      id: employee.id,
      name: employee.name,
      bornDate: employee.bornDate,
      salary: employee.salary,
      position: employee.position
    };
  },

  renderMany(employees: Employee[]) {
    return employees.map(employee => this.render(employee))
  }
}