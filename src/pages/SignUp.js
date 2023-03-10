import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title/Title";
import {
  TextField,
  FormControl,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material/";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import axios from "axios";
import { Wrapper } from "../components/Styled";

// FormHelper--------------------------------------------------------------------------
const FormHelperEmails = styled(FormHelperText)`
  width: 100%;
  margin-left: 0 !important;
  font-weight: 700 !important;
  color: ${(props) =>
    props.isemail === "true" ? "#71c4eb" : `${primaryColor}`} !important;
`;
const FormHelperNames = styled(FormHelperText)`
  width: 100%;
  margin-left: 0 !important;
  font-weight: 700 !important;
  color: ${(props) =>
    props.isname === "true" ? "#71c4eb" : `${primaryColor}`} !important;
`;
const FormHelperPWs = styled(FormHelperText)`
  width: 100%;
  margin-left: 0 !important;
  font-weight: 700 !important;
  color: ${(props) =>
    props.ispassword === "true" ? "#71c4eb" : `${primaryColor}`} !important;
`;
const FormHelperPWCF = styled(FormHelperText)`
  width: 100%;
  margin-left: 0 !important;
  font-weight: 700 !important;
  color: ${(props) =>
    props.ispassword2 === "true" ? "#71c4eb" : `${primaryColor}`} !important;
`;

const SignUp = () => {
  const navigate = useNavigate();
  // Input Component--------------------------------------------------------
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // ErrorMessage State-----------------------------------------------------
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [password2Message, setPassword2Message] = useState("");

  // Validation State-------------------------------------------------------
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPassword2, setIsPassword2] = useState(false);

  // Email ????????? ??????-------------------------------------------------------
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("???????????? ?????? ?????????");
      setIsEmail(false);
    } else {
      setEmailMessage("????????? ????????? ??????");
      setIsEmail(true);
    }
  }, []);

  // Name ????????? ??????-------------------------------------------------------
  const onChangeName = useCallback((e) => {
    const nameRegex = /^(?=.*[a-zA-Z0-9???-???])[a-zA-Z0-9???-???]{1,10}$/;
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    if (!nameRegex.test(nameCurrent)) {
      setNameMessage("??????or?????????[1~10??????]");
      setIsName(false);
    } else {
      setNameMessage("????????? ?????? ??????");
      setIsName(true);
    }
  }, []);

  // ???????????? ????????? ??????----------------------------------------------------
  const onChangePassword1 = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("??????+?????????+????????????[8?????????]");
      setIsPassword(false);
    } else {
      setPasswordMessage("???????????? ?????? ??????");
      setIsPassword(true);
    }
  }, []);

  // ???????????? ?????? ????????? ??????-----------------------------------------------
  const onChangePassword2 = useCallback(
    (e) => {
      const password2Current = e.target.value;
      setPassword2(password2Current);

      if (password === password2Current) {
        setPassword2Message("???????????? ?????? ??????");
        setIsPassword2(true);
      } else {
        setPassword2Message("???????????? ?????? ?????????");
        setIsPassword2(false);
      }
    },
    [password]
  );

  // Submit ??????------------------------------------------------------------
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const joinData = {
      email: data.get("email"),
      name: data.get("name"),
      password: data.get("password"),
      password2: data.get("password2"),
    };
    await axios
      .post("http://127.0.0.1:8000/login/signup/", joinData)
      .then((response) => {
        console.log(response);
        alert("???????????????????????????. ????????? ??? ??????????????????.");
        navigate("/signin", { replace: true });
      })
      .catch((error) => {
        if (error.request.status === 400) {
          alert("?????? ????????? ??????????????????. ?????? ???????????? ??????????????????.");
        }
        console.log(error);
      });
  };

  return (
    <>
      <Wrapper>
        <Title />
        <Typography
          fontFamily="Noto Sans KR Bold"
          color={primaryColor}
          sx={{
            fontSize: "12px",
            fontWeight: "900",
            marginTop: 1,
          }}
        >
          ????????????
        </Typography>
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <FormControl component="fieldset">
            <TextField
              autoFocus
              required
              fullWidth
              variant="standard"
              color="secondary"
              type="email"
              id="email"
              name="email"
              label="?????????"
              onChange={onChangeEmail}
              error={email !== "" && !isEmail}
            />
            <FormHelperEmails isemail={isEmail ? "true" : "false"}>
              {emailMessage}
            </FormHelperEmails>
            <TextField
              required
              fullWidth
              variant="standard"
              color="secondary"
              type="name"
              id="name"
              name="name"
              label="??????"
              sx={{ marginTop: 2 }}
              onChange={onChangeName}
              error={name !== "" && !isName}
            />
            <FormHelperNames isname={isName ? "true" : "false"}>
              {nameMessage}
            </FormHelperNames>
            <TextField
              required
              fullWidth
              variant="standard"
              color="secondary"
              type="password"
              id="password"
              name="password"
              label="????????????"
              sx={{ marginTop: 2 }}
              onChange={onChangePassword1}
              error={password !== "" && !isPassword}
            />
            <FormHelperPWs ispassword={isPassword ? "true" : "false"}>
              {passwordMessage}
            </FormHelperPWs>
            <TextField
              required
              fullWidth
              variant="standard"
              color="secondary"
              type="password"
              id="password2"
              name="password2"
              label="???????????? ??????"
              sx={{ marginTop: 2 }}
              onChange={onChangePassword2}
              error={password2 !== "" && !isPassword2}
            />
            <FormHelperPWCF ispassword2={isPassword2 ? "true" : "false"}>
              {password2Message}
            </FormHelperPWCF>
            <br />
            <PrimaryBtn btnName={"??????"} type="submit"></PrimaryBtn>
          </FormControl>
        </Box>
      </Wrapper>
    </>
  );
};

export default SignUp;
