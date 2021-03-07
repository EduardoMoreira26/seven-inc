import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Employee from '../models/Employee';
export default class EmployeeController {

  async all(request: Request, response: Response) {
    const employeesRepository = getRepository(Employee);
    const employees = await employeesRepository.find();

    return response.json(employees);
  }

  async index(request: Request, response: Response) {
    const { id } = request.params;

    const employeesRepository = getRepository(Employee);

    const employee = await employeesRepository.findOneOrFail(id);

    return response.json(employee);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      bornDate,
      salary,
      position
    } = request.body;

    const employeesRepository = getRepository(Employee);

    const employee = employeesRepository.create({
      name,
      bornDate,
      salary,
      position
    });

    await employeesRepository.save(employee);

    return response.status(201).json(employee)
  }

  async edit() { }

  async delete() { }
}