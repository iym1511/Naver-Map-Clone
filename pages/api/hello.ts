// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // HTTP 요청에 대한 정보가 req객체에 들어오고 headers,cookies 값이 담겨있음.
  console.log(req.headers, req.cookies);
  res.status(200).json({ name: 'John Doe' })
}
