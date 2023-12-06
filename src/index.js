import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterList } from "./routes/RouterList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryITSpace = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryITSpace}>
      <RouterList />
    </QueryClientProvider>
  </React.StrictMode>
);
