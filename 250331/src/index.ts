// 제너릭 타입별칭
type Map2<T> = {
  [key: string]: T;
};

let stringMap2: Map2<number> = {
  // <>의값을 string number 맘대로 변경해줄수 있다
  key: 10,
};

//제너릭 인터페이스
//k와 v를 주어서 여러개의 interface를 만들지 않아도 된다
//코드를 줄일 수 있다
interface IKeyPair<K, V> {
  key: K;
  value: V;
}

let KeyPair: IKeyPair<string, number> = {
  key: "Key",
  value: 10,
};

let keyPair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["i"],
};
