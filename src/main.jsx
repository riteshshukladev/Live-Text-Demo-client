
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { SocketProvider } from "./SocketContext";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import Session from "./Session";
import ChatPage from "./ChatPage";

if(process.env.NODE_ENV === 'production') disableReactDevTools();

  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="session" element={<Session/>}/>
        </Routes>
      </SocketProvider>
    </BrowserRouter>
  
);
