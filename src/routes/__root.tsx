import { createRootRoute, Outlet } from "@tanstack/react-router";
import App from "@app/App";


export const Route = createRootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  )
});
