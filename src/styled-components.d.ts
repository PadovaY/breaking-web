// ./styled-components.d.ts
import { theme } from './theme';

interface CustomTheme {
  colors: typeof theme.colors;
  spacing: typeof theme.spacing;
  radius: typeof theme.radius;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme { }
}
