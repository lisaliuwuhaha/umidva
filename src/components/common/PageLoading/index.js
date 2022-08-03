import React, { memo, useRef, useEffect, useState } from "react";
import { Wrapper, Loader } from "./style";

export default () => {
  return (
    <Wrapper>
      <Loader>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Loader>
    </Wrapper>
  );
};
