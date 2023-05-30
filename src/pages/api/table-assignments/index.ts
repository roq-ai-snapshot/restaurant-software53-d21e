import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { tableAssignmentValidationSchema } from 'validationSchema/table-assignments';
import { convertQueryToPrismaUtil } from 'server/utils';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getTableAssignments();
    case 'POST':
      return createTableAssignment();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getTableAssignments() {
    const data = await prisma.table_assignment.findMany(convertQueryToPrismaUtil(req.query, 'table_assignment'));
    return res.status(200).json(data);
  }

  async function createTableAssignment() {
    await tableAssignmentValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.table_assignment.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
