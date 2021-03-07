import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Employee from '../models/Employee';
import employeeView from '../views/employees_view';
import * as Yup from 'yup';
export default class EmployeeController {

  async all(request: Request, response: Response) {
    const employeesRepository = getRepository(Employee);
    const employees = await employeesRepository.find();

    return response.json(employeeView.renderMany(employees));
  }

  async index(request: Request, response: Response) {
    const { id } = request.params;

    const employeesRepository = getRepository(Employee);

    const employee = await employeesRepository.findOneOrFail(id);

    return response.json(employeeView.render(employee));
  }

  async create(request: Request, response: Response) {
    const {
      name,
      bornDate,
      salary,
      position
    } = request.body;

    const employeesRepository = getRepository(Employee);

    const data = {
      name,
      bornDate,
      salary,
      position
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      bornDate: Yup.string().required(),
      salary: Yup.number().required(),
      position: Yup.string().required()
    })

    await schema.validate(data, {
      abortEarly: false,
    });

    const employee = employeesRepository.create(data);

    await employeesRepository.save(employee);

    return response.status(201).json(employee)
  }

  async edit() { }

  async delete() { }
}