import styled from "styled-components";

// 模板字符串相当于直接调用了style里面的div方法  样式不会产生冲突
export const Wrapper = styled.div`
  .page {
    border: 1px solid red;
    color: red;
  }
`;
