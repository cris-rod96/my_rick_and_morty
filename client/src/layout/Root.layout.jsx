import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { Toaster } from "sonner";
import { toast } from "sonner";

export const RootLayout = () => {
  return (
    <>
      <Nav toast={toast} />
      <main>
        <Outlet context={{ toast }} />
        <Toaster richColors />
      </main>
    </>
  );
};
