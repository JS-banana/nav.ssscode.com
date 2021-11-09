import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name, desc } = req.body;
  const result = await prisma.category.create({
    data: {
      name,
      desc,
    },
  });
  res.json(result);
}
