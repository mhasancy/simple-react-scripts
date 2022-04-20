// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections


// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '1000px',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        home
      </RootStyle>
    </Page>
  );
}
