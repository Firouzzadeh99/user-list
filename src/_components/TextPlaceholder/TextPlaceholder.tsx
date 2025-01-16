import React from "react";
import styles from "./TextPlaceholder.module.scss";

interface TextPlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
  color?: string;
}

const TextPlaceholder: React.FC<TextPlaceholderProps> = ({
  width = "100%",
  height = "1rem",
  className,
  rounded = false,
  color = "#e0e0e0",
}) => {
  return (
    <div
      className={`${styles.placeholder} ${className || ""}`}
      style={{
        width,
        height,
        borderRadius: rounded ? "50%" : "4px",
        backgroundColor: color,
      }}
    />
  );
};

export default TextPlaceholder;
