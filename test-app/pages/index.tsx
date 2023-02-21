import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { colorTheme } from "../src/theme";
import QuizModal from "../src/view/components/modals/quizModal";
import { GetServerSideProps } from "next";

const theme = createTheme();

const BtnSave = styled(Button)(() => ({
  width: "144px",
  height: "48px",
  backgroundColor: colorTheme.$lightOrange.main,
  "&:hover": {
    backgroundColor: colorTheme.$darkGrey.main,
  },
}));

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:5000/questions`);
  const data = await res.json();

  return {
    props: {
      questionData: data,
    },
  };
};

export default function Home({ questionData }: any) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const quizData = questionData;

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
            quizData={quizData}
            isOpen={isModalOpen}
            onClose={closeModal}
            title="GG"
          ></QuizModal>
          <Typography
            component="h1"
            variant="h5"
            color={colorTheme.$lightOrange.main}
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
