import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { colorTheme } from "../src/theme";
import { Checkbox, FormControlLabel, Modal, Paper } from "@mui/material";
import QuizModal from "../src/view/components/modals/quizModal";
import Router from "next/router";

const theme = createTheme();

const BtnSave = styled(Button)(() => ({
  width: "144px",
  height: "48px",
  backgroundColor: colorTheme.$lightGrey.main,
}));
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Mainpage() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QuizModal
            isOpen={isModalOpen}
            onClose={closeModal}
            title="GG"
          ></QuizModal>
          <Typography
            component="h1"
            variant="h5"
            color={colorTheme.$lightGrey.main}
          >
            Quize test
          </Typography>

          <BtnSave
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={openModal}
          >
            Start quize
          </BtnSave>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
