import { Box, Container, Typography } from "@mui/material";
import styles from "./styles/leftSideBar.style.module.css";
export default function LeftSideBar() {
  return (
    <Box className={styles.background}>
      <Container className={styles.signupContainer}>
        <Typography className={styles.gettingStartedText}>
          Getting Started
        </Typography>
        <Typography className={styles.gettingStartedText}>...</Typography>
      </Container>
    </Box>
  );
}
