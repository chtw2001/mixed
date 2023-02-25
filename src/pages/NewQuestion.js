import React, { useState } from "react";
import styles from "../styles/newQuestion.module.css";
import Menu from "../assets/images/menu.png";
import Notification from "../assets/images/notification.png";
import InputImage from "../assets/images/titleLogo.png";
import Background1 from "../assets/images/newQuestion_img1.png";
import Background2 from "../assets/images/newQuestion_img2.png";
import Button from "../components/Button/PrimaryBtn";

const NewQuestion = ({ user, point }) => {
  const [visible, setVisible] = useState(true);

  const LinkCopy = () => {
    navigator.clipboard.writeText(window.document.location.href);
    alert("URL이 복사되었습니다!");
  };

  return (
    <>
      <div className={styles.top}>
        <div className={styles.topBtn}>
          <img className={styles.menuImg} src={Menu} alt="error" />
          <img className={styles.notiImg} src={Notification} alt="error" />
        </div>
        <div className={styles.userName}>
          <img className={styles.usernameImg} src={InputImage} alt="error" />
          {user}
        </div>
        <p className={styles.pointFont}>포인트 : {point}</p>
      </div>
      <br />
      {visible ? (
        <div className={styles.createQuestion}>
          <input
            className={styles.addQuestion}
            placeholder="새로운 질문을 입력해주세요."
          />
          <br />
          <Button
            btnName={"확인"}
            onClick={() => {
              setVisible(!visible);
            }}
          />
        </div>
      ) : (
        <div className={styles.createQuestion}>
          <text className={styles.questionFont}>
            &nbsp;&nbsp;질문이 생성되었습니다.
            <br />
            <br />
            친구들에게 공유해보세요!
          </text>
          <Button btnName={"링크 복사"} onClick={LinkCopy()} />
          <br />
          <Button btnName={"확인"} />
        </div>
      )}

      <img className={styles.img1} src={Background1} alt="error" />
      <img className={styles.img2} src={Background2} alt="error" />
    </>
  );
};
export default NewQuestion;
