// "use client"; // 사용함으로써 클라이언트 컴포넌트라고 인식한다
// import ClientComponent from "./client-omponent";
// import ServerComponent from "./server-component";

// export default function Home() {
//   return (
//     <div>
//       인덱스 페이지
//       <ClientComponent>
//         <ServerComponent />
//       </ClientComponent>
//     </div>
//   );
// }
// ()로 묶어줌으로써 동일선상에 있는 것들도 그룹으로 묶음으로 같을 레이아웃을 받는다

// 서버에서 사전렌더링을 할때 클라이언트에게 보내주지 않아도 될 컴포넌트

// app router에서 사용되는 컴포넌트는 defult는 서버컴포넌트이다
// 사전렌더링 단계에서 한번 읽고
// 윈도우에서 한번 읽고

// 임시서치바는 계속 바뀌어야하기 때문에 클라이언트 컴포넌트가 되야한다
