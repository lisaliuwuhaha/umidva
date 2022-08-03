import styled from "styled-components";
const FaceView = styled.div`
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  background: #eaeaea url(//www.alphazone.com.cn/resource/hxlogo-grey.png)
    no-repeat center center;
  background-size: cover;
    img {
      width: 100%;
  }
`;
export default ({ face, style }) => {
  return (
    <FaceView className={style}>
      <img src={"//www.alphazone.com.cn/" + face} alt="" />
    </FaceView>
  );
};
