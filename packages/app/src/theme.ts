import { createTheme, darkTheme, genPageTheme, shapes } from '@backstage/theme';

export const myTheme = createTheme({
  palette: {
    ...darkTheme.palette,
    background: {
      default: '#1f1c24',
      paper: '#2d2d2e',
    },
    primary: {
      main: '#d5d6db',
    },
    secondary: {
      main: '#8303A6',
    },
    error: {
      main: '#8c4351',
    },
    warning: {
      main: '#8f5e15',
    },
    info: {
      main: '#34548a',
    },
    success: {
      main: '#485e30',
    },
    banner: {
      info: '#34548a',
      error: '#8c4351',
      text: '#d5d6db',
      link: '#565a6e',
    },
    errorBackground: '#8c4351',
    warningBackground: '#8f5e15',
    infoBackground: '#d5d6db',
    navigation: {
      background: '#251840',
      indicator: '#F2DF0F',
      color: '#d5d6db',
      selectedColor: '#ffffff',
    },
  },
  defaultPageTheme: 'home',
  pageTheme: {
    home: genPageTheme({ colors: ['#6907F2', '#6907F2'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#343b58', '#343b58'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#132FF2', '#132FF2'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#706d09', '#706d09'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#4702A6', '#4702A6'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#8c4351', '#8c4351'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#8303A6', '#8303A6'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#8303A6', '#8303A6'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#8303A6', '#8303A6'], shape: shapes.wave }),
  },
});
