import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const renderWithProvider = (component: any) => {
    return render(
        <ThemeProvider theme={theme}>
            {component}
        </ThemeProvider>)
}