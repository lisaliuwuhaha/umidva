import { Modal } from "antd"
import "antd/dist/antd.css";
import styled from "styled-components"
import colors from "../../constants/colors"

const GlobalModalWrapper = styled(Modal)`
  .ant-modal-content {
    min-height: 88px;
    border-radius: 4px;
    overflow: hidden; /* TEMP: */
  }
  .ant-modal-close {
    margin: 16px;
    margin-right: 0;
    color: ${colors.detail};
    display: ${props => (props.noBtnClose ? "none" : "block")};
  }
  .ant-modal-header {
    height: 88px;
    border: 0;
  }
  .ant-modal-title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    color: ${colors.primary};
  }
  .ant-modal-body {
    padding: 0;
  }
`

/** 全局通用弹窗
 * 默认允许 键盘esc / 点击蒙层 关闭弹窗
 * @param {Bollean} visible modal显示状态
 * @param {String} title modal 标题
 * @param {Number} width modal 宽度
 * @param {Function} onCancel modal 关闭方法
 */
const GlobalModal = ({
  title = "",
  width = 520,
  visible = false,
  children,
  onCancel = null,
  ...props
}) => {
  return (
    <GlobalModalWrapper
      visible={visible}
      title={title}
      footer={null}
      onCancel={onCancel}
      width={width}
      centered={true} // 居中展示弹窗
      {...props}
    >
      {children}
    </GlobalModalWrapper>
  )
}

export { GlobalModal as default, GlobalModalWrapper }
