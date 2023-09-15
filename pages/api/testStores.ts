// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Store } from '@/types/srore'
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  id : number
  text: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const testStores = (await import('../../public/test.json')).default as Data[]
  res.status(200).json(testStores)
}
