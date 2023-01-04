import { Button, ButtonProps } from "@mui/material";

export const AppButton = (props: ButtonProps) => {
  const { children, sx, ...restProps } = props;
  return (
    <Button {...restProps} sx={{ ...sx, textTransform: "none" }}>
      {children}
    </Button>
  );
};
