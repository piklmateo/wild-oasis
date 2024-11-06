import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import DashboardPage from "./pages/DashboardPage";
import BookingsPage from "./pages/BookingsPage";
import CabinsPage from "./pages/CabinsPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import AccountPage from "./pages/AccountPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalContextProvider } from "./context/ModalContext";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/cabins" element={<CabinsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </ModalContextProvider>
    </QueryClientProvider>
  );
}

//jonas@example.com
//pass0987
export default App;
