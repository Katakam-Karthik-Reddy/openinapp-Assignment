import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  data: {
    cardsdata: {
      totalRevenues: number;
      totalTransactions: number;
      totalusers: number;
      totallikes: number;
    };
    bardata: {
      week1: { user: number; guest: number };
      week2: { user: number; guest: number };
      week3: { user: number; guest: number };
      week4: { user: number; guest: number };
    };
    doughnutdata: {
      basictees: number;
      customshortpants: number;
      superHoodies: number;
    };
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const first = generateRandom(0, 50);
  const second = generateRandom(0, 50);
  let data = {
    cardsdata: {
      totalRevenues: generateRandom(100000, 9000000),
      totalTransactions: generateRandom(1000, 9000),
      totalusers: generateRandom(1000, 9000),
      totallikes: generateRandom(1000, 9000),
    },
    bardata: {
      week1: { user: generateRandom(0, 1000), guest: generateRandom(0, 1000) },
      week2: { user: generateRandom(0, 1000), guest: generateRandom(0, 1000) },
      week3: { user: generateRandom(0, 1000), guest: generateRandom(0, 1000) },
      week4: { user: generateRandom(0, 1000), guest: generateRandom(0, 1000) },
    },
    doughnutdata: {
      basictees: first,
      customshortpants: second,
      superHoodies: 100 - (first + second),
    },
  };

  res.status(200).json({ data });
}

function generateRandom(min: number, max: number) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}
