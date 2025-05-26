import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchCoins } from "../api";

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

const Loader = styled.div`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.textColor};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
`;

const CoinList = styled.ul`
  width: 760px;
  height: 500px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.bgColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 8px;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 20px;
`;

const Arrow = styled.span`
  display: inline-block;
  font-weight: 600;
  transition: transform 0.3s;
  &:hover {
    transform: translateX(10px);
  }
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

// // 목업 데이터
// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
// ];

const Coins = () => {
  // // 최초엔 빈배열이었으나 아이템을 불러온다면 위의 타입정의 대로
  // // 배열들이 반환이 될것이다.
  // const [coins, setCoins] = useState<CoinInterface[]>([]);

  // // 에러, 로딩중일시 예외조항
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     setCoins(json.slice(0, 30));
  //     setLoading(false); // 로딩중이 아니다 = 완료
  //   })(); // 고차함수형식: 함수의 선언과 호출을 동시에 진행
  // }, []); // 1회 마운트

  // console.log(coins);
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data.map((coin) => (
            <Link to={`/${coin.id}`} state={`${coin.name}`} key={coin.id}>
              <Coin>
                ®Now Rank : {coin.rank}
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} Detail Information<Arrow>&rarr;</Arrow>
              </Coin>
            </Link>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
