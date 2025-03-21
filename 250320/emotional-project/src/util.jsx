import emotion1 from "./imgs/emotion1.png";
import emotion2 from "./imgs/emotion2.png";
import emotion3 from "./imgs/emotion3.png";
import emotion4 from "./imgs/emotion4.png";
import emotion5 from "./imgs/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgById(5),
  },
];

export const getFormattedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

export const getMonthRangeByDate = (date) => {
  //인자값으로들어간날짜기준으로 이것이 몇월에 들어갔는지
  const beginTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getTime(); //+1을 할거면 다하고 안할거면 다하지마라??
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};
// 01해당일의 마지막날짜와 달의 시작하자마자의 사이를 이렇게 적기로 약속했다
//자바스크립트의 문법
