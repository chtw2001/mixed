import { Modal, Typography, Box } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MypageModal() {
  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={modalClose}>
        <Box sx={style}>
          <Typography>modal test</Typography>
        </Box>
      </Modal>
    </>
  );
}
