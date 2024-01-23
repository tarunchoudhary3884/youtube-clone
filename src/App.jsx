import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import Body from "./components/Body";
import VideoContainer from "./components/VideoContainer";
import VideoPlayer from "./components/VideoPlayer";

// Lazy load the SearchVideos component
const LazySearchVideos = lazy(() => import("./components/SearchVideos"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <VideoPlayer />,
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazySearchVideos />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
