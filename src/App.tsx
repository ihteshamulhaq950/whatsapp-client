import ChatBox from "./components/chat/ChatBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/chat";
import ChatRoomBox from "./components/chat/ChatRoomBox";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ChatPage />}>
            <Route path="/" element={<ChatBox />} />
            <Route path="/username" element={<ChatRoomBox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
