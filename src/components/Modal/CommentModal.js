import React from "react";
import PrimaryBtn from "../Button/PrimaryBtn";
import styled from "styled-components";

const Modal = styled.div`
  width: 90%;
  height: 200px;
  background-color: white;
  border: #dca4a8 1px solid;
  border-radius: 1rem;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  flex-direction: column;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export default function CommentModal({
  text,
  btnName1,
  btnName2,
  onClick1,
  onClick2,
  type1,
  type2,
}) {
  return (
    <Modal>
      {text}
      <ButtonWrap>
        <PrimaryBtn
          btnName={btnName1}
          onClick={() => onClick1(true)}
          type={type1}
          width={"100px"}
        />
        <PrimaryBtn
          btnName={btnName2}
          onClick={() => onClick2(false)}
          type={type2}
          width={"100px"}
        />
      </ButtonWrap>
    </Modal>
  );
}
