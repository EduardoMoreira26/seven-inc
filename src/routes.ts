import { Router } from 'express';
import EmployeeController from './controllers/EmployeeController';

const routes = Router();

const employeeController = new EmployeeController()

routes.get('/employee', employeeController.all);
routes.get('/employee/:id', employeeController.index);

routes.post('/employee', employeeController.create);

routes.put('/employee/:id', employeeController.edit);

routes.delete('/employee/:id', employeeController.delete);

export default routes;
