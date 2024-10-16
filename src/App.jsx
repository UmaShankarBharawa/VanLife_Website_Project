import { RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Vans, { loader as vansLoader } from "./components/Vans";
import VanDetail from "./components/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./components/Host/HostVans";
import HostVanDetail from "./components/Host/HostVanDetail";
import HostVanInfo from "./components/Host/HostVanInfo"
import HostVanPricing from "./components/Host/HostVanPricing"
import HostVanPhotos from "./components/Host/HostVanPhotos"
import NotFound from "./components/NotFound";
import Error from './components/Error'
import Login from "./components/Login";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
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
