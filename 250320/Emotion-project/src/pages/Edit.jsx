import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Editor from "../components/Editor";
import Button from "../components/Button";
import Header from "../components/Header";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const goBack = () => {
    navigate(-1); //뒤로가기
  };

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!~")) {
      onDelete(id);
      navigate("/");
    }
  };

  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { id, date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          title="일기수정하기"
          leftChild={<Button text="< 뒤로가기" onClick={goBack} />}
          rightChild={<Button text="삭제하기" onClick={onClickDelete} />}
          type
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};
export default Edit;

//id 를 찾아온다 useParams
//부모요소의 state나 props 값이 바뀌면 자식요소는 리렌더링 된다!!
