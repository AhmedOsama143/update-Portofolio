import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
import Layout from "./Components/Layout/Layout";

const Home = lazy(() => import("./Pages/Home/Home"));

function LoadingFallback() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-primary-400 border-t-transparent animate-spin" />
        <p className="text-muted text-sm">{t.loading}</p>
      </div>
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <Home />
              </Suspense>
            ),
          },
        ],
      },
    ],
    {
      basename: "/",
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
