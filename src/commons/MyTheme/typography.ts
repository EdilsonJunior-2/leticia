import type { TypographyVariantsOptions } from "@mui/material/styles";
import type React from "react";

declare module "@mui/material/styles" {
    interface TypographyVariants {
    poster: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

const typography: TypographyVariantsOptions = {
  fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    poster: {
        
    },
    h1: {
        fontSize: 56
    },
    h2: {
        fontSize: 38
    },
    h3: {
        fontSize: 32
    },
    h4: {
        fontSize: 25
    },
    h5: {
        fontSize: 20
    },
    h6: {
        fontSize: 18
    },
    subtitle1: {
        fontSize: 14
    },
    subtitle2: {
        fontSize: 12
    }
}

export default typography;