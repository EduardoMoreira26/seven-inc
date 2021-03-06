import { Router } from 'express';
import EmployeeController from './controllers/EmployeeController';

const routes = Router();

const employeeController = new EmployeeController()

routes.get('/user', employeeController.all);
routes.get('/user/:id', employeeController.index);

routes.post('/user/', employeeController.create);

routes.put('/user/:id', employeeController.edit);

routes.delete('/user/:id', employeeController.delete);

export default routes;
