// src/components/Providers.tsx

"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

const theme = extendTheme({});

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider>{props.children}</SessionProvider>
    </ChakraProvider>
  );
};

export default Providers;