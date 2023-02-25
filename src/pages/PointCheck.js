import React from "react";
import styles from "../styles/pointCheck.module.css";
import Back from "../assets/images/back.png";
import Menu from "../assets/images/menu.png";
import Notification from "../assets/images/notification.png";

function PointCheck({user, point}) {
  return (
    <div>
      <img src={Back} alt="error" />
      <div className={styles.topBtn}>
        <img src={Menu} alt="error" />
        <img src={Notification} alt="error" />
      </div>
      <div className={styles.pointBox}>
        <p
          className={styles.pointFont}
          style={{ fontSize: "15px", float: "right" }}
        > 포인트 : {point}
        </p>
        <p className={styles.pointFont} style={{ fontSize: "25px" }}>
          {user}
        </p>
      </div>
      <div className={styles.notiWordBundle}>
        <p className={styles.notiWord}>
          • 포인트는 댓글 열람 시 사용 가능합니다.
        </p>
        <p className={styles.notiWord}>
          • 포인트는 다른 유저 게시물에 댓글을 달아 얻을 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default PointCheck;
