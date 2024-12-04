import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as Pages from "@/presentation/pages";
import { LayoutDashboard } from "@components/internal";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutDashboard />}>
        <Route path="/" element={<Pages.Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
