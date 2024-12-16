import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Vans, { loader as vansLoader } from "./components/Vans";
import VanDetail, { loader as vanDetailLoader } from "./components/VanDetail";
import Layout from "./components/Layout";
import Dashboard, { loader as dashboardLoader } from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVanLoader } from "./components/Host/HostVans";
import HostVanDetail, { loader as hostVanDetailLoader } from "./components/Host/HostVanDetail";
import HostVanInfo from "./components/Host/HostVanInfo"
import HostVanPricing from "./components/Host/HostVanPricing"
import HostVanPhotos from "./components/Host/HostVanPhotos"
import NotFound from "./components/NotFound";
import Error from './components/Error'
import Login, { loader as loginLoader, action as loginAction } from "./components/Login";
import { requireAuth } from "./utils";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route
        path="about"
        element={<About />}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<Error />}
        loader={vanDetailLoader}
      />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={dashboardLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => {
            await requireAuth(request)
            return null
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => {
            await requireAuth(request)
            return null
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          errorElement={<Error />}

          loader={hostVanLoader}
        />

        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          errorElement={<Error />}

          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => {
              await requireAuth(request)
              return null
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => {
              await requireAuth(request)
              return null
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => {
              await requireAuth(request)
              return null
            }}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App;
