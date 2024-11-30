import { FastifyInstance } from 'fastify';
import { Express } from 'express';
import { studentRoutes } from './studentRoutes';
import {userRoutes} from "./userRoutes"
import {hookRoutes} from "./hookRoutes"
import {authRoutes} from "./authRoutes"
// import UsersRoutes from "./UsersRoute"
// import profileRoute from './profileRoute';
// import candidateRoute from './candidateRoute';
import {campaignRoute} from './campaignRoute';
const basePrefix = '/app';

export default async function (app: FastifyInstance) {
  app.register(studentRoutes, { prefix: `${basePrefix}/student` });
  app.register(userRoutes,{prefix:`${basePrefix}/user`});
  app.register(hookRoutes,{prefix:`${basePrefix}/hook`});
  app.register(authRoutes,{prefix:`${basePrefix}/auth`});
  // app.register(UsersRoutes,{prefix:`${basePrefix}/users`});
  // app.register(profileRoute, { prefix: `${basePrefix}/profile` });
  // app.register(candidateRoute, { prefix: `${basePrefix}/candidate` });
  app.register(campaignRoute, { prefix: `${basePrefix}/campaign` });
}
