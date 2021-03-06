import { Request, Response } from 'express';

export default class EmployeeController {
  async all(request: Request, response: Response) {
    response.json({ message: "Hello World" })
  }

  async index() { }

  async create() { }

  async edit() { }

  async delete() { }
}