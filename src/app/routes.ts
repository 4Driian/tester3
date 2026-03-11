import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProductDetail } from "./pages/ProductDetail";
import { Showrooms } from "./pages/Showrooms";
import { Home } from "./Home";
import { Catalog } from "./pages/Catalog";
import { Collections } from "./pages/Collections";
import { Spaces } from "./pages/Spaces";
import { Contact } from "./pages/Contact";

// Admin Pages
import { Dashboard as AdminDashboard } from "./admin/Dashboard";
import { Products as AdminProducts } from "./admin/Products";
import { Showrooms as AdminShowrooms } from "./admin/Showrooms";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "catalog",
        Component: Catalog,
      },
      {
        path: "collections",
        Component: Collections,
      },
      {
        path: "spaces",
        Component: Spaces,
      },
      {
        path: "products/:id",
        Component: ProductDetail,
      },
      {
        path: "showrooms",
        Component: Showrooms,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminDashboard,
      },
      {
        path: "products",
        Component: AdminProducts,
      },
      {
        path: "inventory",
        Component: AdminProducts, // Reusing list for prototype
      },
      {
        path: "showrooms",
        Component: AdminShowrooms,
      },
    ],
  },
]);
