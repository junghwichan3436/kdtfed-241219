import { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import { getMonthRangeByDate } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  //여기 어려워!!!!
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        ) //사이의 있는 값중에 참인애들만 뽑아서 filtereddata안에 넣어준다
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]); //data,pivotDate 변경되면 콜백함수가 실행된다

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  // 한달씩 증가하고 감소한다

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </>
  );
};

export default Home;
