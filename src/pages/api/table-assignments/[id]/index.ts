import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { tableAssignmentValidationSchema } from 'validationSchema/table-assignments';
import { convertQueryToPrismaUtil } from 'server/utils';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getTableAssignmentById();
    case 'PUT':
      return updateTableAssignmentById();
    case 'DELETE':
      return deleteTableAssignmentById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getTableAssignmentById() {
    const data = await prisma.table_assignment.findFirst(convertQueryToPrismaUtil(req.query, 'table_assignment'));
    return res.status(200).json(data);
  }

  async function updateTableAssignmentById() {
    await tableAssignmentValidationSchema.validate(req.body);
    const data = await prisma.table_assignment.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteTableAssignmentById() {
    const data = await prisma.table_assignment.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
