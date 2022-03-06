import React from 'react';
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const renderWithProvider = (component: any) => {
    const queryClient = new QueryClient()

    return render(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                {component}
            </ThemeProvider>
        </QueryClientProvider>)
}