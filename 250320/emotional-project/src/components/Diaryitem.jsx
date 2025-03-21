import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { getEmotionImgById } from "../util";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-color);
`;

const DiaryContent = styled.div``;

const ImgBg = styled.div`
  width: 120px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.img_section_1 {
    background: var(--emotion-01);
  }
  &.img_section_2 {
    background: var(--emotion-02);
  }
  &.img_section_3 {
    background: var(--emotion-03);
  }
  &.img_section_4 {
    background: var(--emotion-04);
  }
  &.img_section_5 {
    background: var(--emotion-05);
  }
`;

const Img = styled.img`
  width: 50%;
`;

const InfoSection = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 4px;
`;

const DateItem = styled.div``;

const ContentItem = styled.div`
  font-size: 3rem;
`;

const ButtonSection = styled.div``;

const Diaryitem = ({ id, emotionsId, content, date }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`); //동적경로엔 id값이 붙어야한다
  };
  return (
    <Wrapper>
      <DiaryContent>
        <ImgBg className={`img_section_${emotionsId}`} onClick={goDetail}>
          <Img
            src="{getEmotionImgById(emotionId)}"
            alt="{`emotion${emotionId}`}"
          />
        </ImgBg>
      </DiaryContent>
      <InfoSection>
        <DateItem>{new Date(parseInt(date)).toLocaleDateString}</DateItem>
        {/* //객체로 들어오면 안되기때문에 문자열로 바꾸어 주었다 */}
        <ContentItem>{content.slice(0, 25)}</ContentItem>
        {/* /총 25자만 짤라서 찾아와라 해서 slice문자열 짜르는걸 주었다 */}
      </InfoSection>
      <ButtonSection>
        <Button text="수정하기" onClick={goEdit} />
      </ButtonSection>
    </Wrapper>
  );
};

export default Diaryitem;
