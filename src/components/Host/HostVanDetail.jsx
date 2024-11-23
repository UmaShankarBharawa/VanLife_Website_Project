import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth()
  return getHostVans(params.id)
}

export default function HostVanDetail() {

  const van = useLoaderData();

  const activeStyle = {
    fontWeight: 'bold',
    color: '#161616'
  };

  return (
    <div className="host-van-detail-container">
      <Link to={".."} relative="path" className='back'>&larr; <span>Back to all vans</span></Link>
      <div className="host-van-detail--van-container">
        <div className="host-van-detail--van-detail">
          <img src={van.imageUrl} alt={van.name} width={250} />
          <div className="host--van--detail">
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h1>{van.name}</h1>
            <h3>${van.price}<span>/day</span></h3>
          </div>
        </div>
        <nav className="host-van-detail--navbar">
          <NavLink
            to={"."}
            end
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Details
          </NavLink>
          <NavLink
            to={"pricing"}
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Pricing
          </NavLink>
          <NavLink
            to={"photos"}
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{van}} />
      </div>
    </div>
  )
}
