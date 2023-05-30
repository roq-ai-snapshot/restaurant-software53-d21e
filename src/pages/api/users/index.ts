import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { userValidationSchema } from 'validationSchema/users';
import { convertQueryToPrismaUtil } from 'server/utils';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getUsers();
    case 'POST':
      return createUser();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getUsers() {
    const data = await prisma.user.findMany(convertQueryToPrismaUtil(req.query, 'user'));
    return res.status(200).json(data);
  }

  async function createUser() {
    await userValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.order?.length > 0) {
      const create_order = body.order;
      body.order = {
        create: create_order,
      };
    } else {
      delete body.order;
    }
    if (body?.reservation?.length > 0) {
      const create_reservation = body.reservation;
      body.reservation = {
        create: create_reservation,
      };
    } else {
      delete body.reservation;
    }
    if (body?.restaurant?.length > 0) {
      const create_restaurant = body.restaurant;
      body.restaurant = {
        create: create_restaurant,
      };
    } else {
      delete body.restaurant;
    }
    if (body?.table_assignment?.length > 0) {
      const create_table_assignment = body.table_assignment;
      body.table_assignment = {
        create: create_table_assignment,
      };
    } else {
      delete body.table_assignment;
    }
    const data = await prisma.user.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
