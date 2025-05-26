// import { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Link,
  Outlet,
  useMatch,
} from "react-router-dom";
// 현재 주소창에 있는 값(state)을 찾아오고자 할때 location을 쓴다.
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Header = styled.header`
  font-size: 3.2rem;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const Loader = styled.div`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.textColor};
`;

const Overview = styled.div`
  width: 600px;
  color: ${({ theme }) => theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 8px;
  gap: 8px;
  background: ${({ theme }) => theme.textColor};
  span:first-child {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.accentColor};
    text-transform: uppercase;
    text-shadow: 0 0 20px rgb(223, 219, 12, 0.6);
  }
  span:last-child {
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: underline;
  }
`;

const Description = styled.div`
  width: 600px;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 2rem;
  line-height: 140%;
  color: ${({ theme }) => theme.textColor};
  text-shadow: 0 0 20px rgb(223, 219, 12, 1);
  background: ${({ theme }) => theme.accentColor};
  margin-bottom: 10px;
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

// 스타일 컴포넌트 또한 컴포넌트 함수이므로
// 그렇게 타입을 정한뒤 active한 영역을 활용할 수 있다.
const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 13px;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  border-radius: 40px;
  margin: 10px 30px;
  background: ${({ isActive, theme }) =>
    isActive ? theme.accentColor : theme.textColor};
  color: ${({ isActive, theme }) =>
    isActive ? theme.textColor : theme.deactivateColor};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

interface IsActive {
  isActive: boolean;
  // null 과 같지 않다는것은 참이라는 뜻이다.
  // 그렇게 영역을 선택적으로 활용하겠다 라는 뜻이다.
  // props 형태로 우리가 객체에 활용하였기 때문에 제네릭 형식으로 활용한것
}

// interface IRouteParams {
//   coinId: string;
// }

interface ILocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: number;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { coinId } = useParams() as { coinId: string }; // 타입단언
  const { state } = useLocation() as ILocationState;
  const priceMatch = useMatch("/:coinId/price");
  const chatrMatch = useMatch("/:coinId/chart");

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();

  //     setInfo(infoData);
  //     setPriceInfo(priceData);

  //     setLoading(false);
  //   })();
  // }, [coinId]);

  // state 값과 coinid값이 동일하게 나올수 있다.
  // 대신 state로 찾아올때 Link값을 거치지 않으므로 오류가 나올경우들이있다.
  // 다만 속도는 빠를 수 있다.
  // 그래서 삼항논리로 {state ? state : loading} 안전장치를 걸어두는 것이다.
  // params 방식(정석대로 거쳐서 나오는 방식)과 location방식 2가지

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>({
    queryKey: ["coinInfo", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["coinPrice", coinId],
    queryFn: () => fetchCoinPrice(coinId),
  });

  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <Header>
        {/* //중첩상황문 */}
        <Link to={"/"}>
          <Title>
            Coin : {state ? state : loading ? "Loading..." : coinId}
          </Title>
        </Link>
      </Header>
      {loading ? (
        <Loader>Loading ...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>🥇Rank : </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>✅ Symbol : </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>✅ isActive : </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            Information of {infoData?.type} coin type: Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Dolorem exercitationem minus
            quis nihil accusamus molestias libero quos unde! Aperiam nihil nam
            aliquid dolore praesentium harum, quibusdam quae quam nulla sunt?
            Quis sequi temporibus illo quae, sed fuga eius doloremque
            consectetur voluptatem unde iure expedita repellendus sunt ea sint
            illum.
          </Description>
          <Overview>
            <OverviewItem>
              <span>💲 Total Supply : </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>💲 Max Supply : </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chatrMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;

// 코인요소의 자식요소로 위에 부분은 공통으로 주면서
// 새로운 페이지 라우팅이 가능하다.

/*
외부 api key값과 value 값을 웹에서 관리자모드에서 간단히 가져올수 있는 방법
해당 콘솔로그 에서 오른족 클릭을 하면 store as global...버튼 클릭
1. temp 생성됨
2. Object.keys(temp1)
3. Object.keys(temp1).join()

하게 되면 키값들만 쭉 나열이 된다.
그 후 소스코드네 복붙한뒤 쉼표들을 지우고 넣으면 된다.(values)도 마찬가지
*/
