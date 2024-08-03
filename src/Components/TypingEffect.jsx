import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
//import './TypingEffect.css';

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isTyping, setIsTyping] = useState(true);

  const words = ["PROGRAMADOR", "DISEÑADOR", "SOPORTE TI"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 150);
      setIsTyping(true);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 950);
        setIsTyping(false);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIsTyping(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, words]);

  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight={"bold"}
        sx={{
          fontSize: { xs: "24px", sm: "34px", md: "34px", lg: "40px" },
          lineHeight: "15px",
          paddingTop: "10px",
          height: "60px",
        }}
      >
        SOY UN <span>{text}</span>
        <span className={`${isTyping ? "" : "cursor"}`}>
          <Box
            sx={{
              display: "inline-block",
              fontSize: { xs: "40px", md: "50px", alignItems: "center" },
              paddingTop: "10px",
            }}
          >
            |
          </Box>
        </span>
      </Typography>
    </Box>
  );
};

export default TypingEffect;
