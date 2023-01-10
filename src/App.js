import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";
import Feed from "./components/Feed";

const App = () => {
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      Navbar
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" exact element={<VideoDetails />} />
        <Route path="/channel/:id" exact element={<ChannelDetails />} />
        <Route path="/search/:searchTearm" exact element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>;
};

export default App;
