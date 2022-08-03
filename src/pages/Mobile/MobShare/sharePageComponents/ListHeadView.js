import styled from "styled-components";

const HeadView = styled.div`
  line-height: 3rem;
  background: #fdd981;
  font-size: 1.2rem;
  font-weight: bold;
  color: #493207;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding-right: 1rem;
  .ms-record-header-id {
    width: 8rem;
  }
  .ms-record-header-date {
    width: 7rem;
  }
  .ms-record-header-state {
    width: 4rem;
  }
  .ms-record-header-draw {
    width: 5rem;
  }
  .ms-record-header-vitality {
    width: 4rem;
  }
`;
const ListHeadView = () => (
  <HeadView>
    <div className="ms-record-header-id">ID</div>
    <div className="ms-record-header-date">注册日期</div>
    <div className="ms-record-header-state">状态</div>
    <div className="ms-record-header-draw">红包领取</div>
    <div className="ms-record-header-vitality">活跃度</div>
  </HeadView>
);

export default ListHeadView;
