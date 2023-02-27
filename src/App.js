import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Create from './Components/Create'
import Note from './Components/Note'
import {createTheme ,ThemeProvider} from "@mui/material/styles"
import Layout from "./Components/Layout";


const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})



function App() {
  return (
    <ThemeProvider theme={theme}>
     <Router>
       <Layout>
       <Routes>
        <Route path="/" element={<Note />} />
        <Route path="/create" element={<Create />} />
       </Routes>
       </Layout>
     </Router>
   </ThemeProvider>
  );
}

export default App;
