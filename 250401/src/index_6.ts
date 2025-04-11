/*//해당객체에대한 형식을 인터페이스로 정리한다
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문 ",
  author: {
    id: 1,
    name: "David",
    age: 20,
  },
};

// post["author"]; //indexed access 타입 인덱스안에 필요한 값만 찾아왔다

// const printAuthor = (author: { id: number; name: string; age:number}) => {
//   console.log(`${author.id} - ${author.name}`);
// };
//indexed access 타입 (객체의 대괄호 표기법을 생각해라)
//post 안에 있는 author이라는 key 값을넣어줌으로써 author이라는 키값만 찾는다
const printAuthor = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name}`);
};
//안에있는 원본데이터값이 바뀌더라도 아래있는 printAuthor에서 나는그냥 출력하고 싶은 값만 뽑고싶다

//--------------------------------------------------------/
// 타입별칭을 변수와 유사한 옵션을 갖고 있기때문에 뭐가 들어오냐가 중요하다 (객체,배열 다들어올수 잇다)
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[]; //배열에있는 0번째 값을 찾아온다했을 때도 indexed access 타입을 쓸 수있다

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];*/
//-------------------------------------------/
// person타입에서 알아서 키값을 찾아와라
// key of 연산자

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

type Person = typeof person;

const person = {
  name: "David",
  age: 20,
  location: "seoul",
};

const getPropertyKey = (person: Person, key: keyof typeof person) => {
  return person[key];
};
//person 이라는 변수를 넣으면 불가능 Person이라는 타입을 넣어야 keyof 가 사용된다
