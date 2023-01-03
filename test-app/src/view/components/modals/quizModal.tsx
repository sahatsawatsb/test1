import React, { useEffect, useState } from "react";
import { AppButton } from "../AppButton";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { colorTheme } from "../../../theme";
import { Router, useRouter } from "next/router";

const BtnSave = styled(Button)(() => ({
  width: "144px",
  height: "48px",
  backgroundColor: colorTheme.$lightGrey.main,
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function QuizModal(isModalOpen: any) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const startOver = () => {
    router.reload();
  };

  const questions = [
    {
      questionText: "What is two plus two?",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "1", isCorrect: false },
      ],
    },
    {
      questionText: "What is two times two?",
      answerOptions: [
        { answerText: "23", isCorrect: false },
        { answerText: "4", isCorrect: true },
        { answerText: "11", isCorrect: false },
        { answerText: "22", isCorrect: false },
      ],
    },
    {
      questionText: "What is two minus two?",
      answerOptions: [
        { answerText: "0", isCorrect: true },
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "3", isCorrect: false },
      ],
    },
    {
      questionText: "What is one plus two?",
      answerOptions: [
        { answerText: "23", isCorrect: false },
        { answerText: "12", isCorrect: false },
        { answerText: "44", isCorrect: false },
        { answerText: "3", isCorrect: true },
      ],
    },
  ];
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setCurrentQuestion(nextQuestion);
  };

  return (
    <div>
      {showScore ? (
        <Dialog
          open={isModalOpen.isOpen}
          onClose={isModalOpen.onClose}
          aria-labelledby="alert-ddialog-title"
          aria-describedby="alert-ddialog-description"
        >
          <DialogTitle textAlign="center" id="alert-didalog-title">
            Your Score is
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              textAlign="center"
              id="alerdt-dialog-description"
            >
              <Item>{score}</Item>
              <div className="answer-section">
                <BtnSave
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => startOver()}
                >
                  Start over
                </BtnSave>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : (
        <Grid
          sx={{ flexGrow: 1 }}
          container
          justifyContent="center"
          spacing={2}
        >
          <Dialog
            fullWidth
            open={isModalOpen.isOpen}
            onClose={isModalOpen.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle textAlign="center" id="alert-dialog-title">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                textAlign="center"
                id="alert-dialog-description"
              >
                {questions[currentQuestion].questionText}
                <Grid
                  container
                  justifyContent="center"
                  spacing={{ xs: 1, md: 2 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{ mx: 1, my: 1 }}
                >
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                      <Grid
                        item
                        xs={2}
                        sm={4}
                        md={4}
                        key={index}
                        sx={{ mx: 1 }}
                      >
                        <BtnSave
                          fullWidth
                          variant="contained"
                          sx={{ mt: 2, mb: 2 }}
                          onClick={() =>
                            handleAnswerButtonClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </BtnSave>
                      </Grid>
                    )
                  )}
                </Grid>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </Grid>
      )}
    </div>
  );
}
