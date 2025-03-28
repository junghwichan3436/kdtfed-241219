// import { useState } from "react";
// import "./App.scss";

// function App() {
//   const [state, setState] = useState({
//     name: "",
//     gender: "",
//     birth: "",
//     bio: "",
//   });
//   const handleOnChange = (e) => {
//     //상태를 관리한다!!
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };
//   return (
//     <div className="App">
//       <div>
//         <input
//           name="name"
//           value={state.name} //값을 입력했다면 state.name ? setstate가 실행 이안의 객체값을 최신화
//           type="text"
//           placeholder="이름"
//           onChange={handleOnChange}
//         />
//       </div>
//       <div>
//         <select name="gender" value={state.birth} onChange={handleOnChange}>
//           <option key="여성">여성</option>
//           <option key="남성">남성</option>
//         </select>
//       </div>
//       <div>
//         <input
//           name="birth"
//           value={state.birth}
//           type="date"
//           onChange={handleOnChange}
//         />
//       </div>
//       <div>
//         <textarea name="bio" value={state.bio} onChange={handleOnChange} />
//       </div>
//     </div>
//   );
// }

// export default App;
