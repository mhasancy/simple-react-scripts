// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page.tsx";
// sections

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "1000px",
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <RootStyle>home</RootStyle>
    </Page>
  );
}
