import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Employee from '../models/Employee';


export default class EmployeeController {

  async all(request: Request, response: Response) {
    return response.json({ message: "Hello World" })
  }

  async index() { }

  async create(request: Request, response: Response) {
    const {
      name,
      bornDate,
      salary,
      position
    } = request.body;

    const employeesRepository = getRepository(Employee)

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