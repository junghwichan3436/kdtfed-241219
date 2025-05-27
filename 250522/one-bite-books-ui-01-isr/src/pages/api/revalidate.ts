import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    //try catch는 비동기 앞에서 무언가 안되면 실행안됨
    await res.revalidate("/");
    return res.json({ revalidate: true }); //클라이언트의 요청이 있으면 메인페이지로 이동 한다
  } catch (err) {
    res.status(500).send("Revalidation Failed");
  }
};

export default handler;
