import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const date = new Date();

  res.status(200).json({
    time: date.toLocaleString(),
  });
};

export default handler;

// next.js는 프레임워크 여서 자체타입이 많다
