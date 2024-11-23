import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth()
  return getHostVans(params.id)
}

export default function Vans() {

  const vans = useLoaderData()

  const hostVanEls = vans.map((van) => {
    const vanList = van.hostId == "123" ? (
      <Link to={van.id} key={van.id} className="host-van--link">
        <div className="list-van">
          <img src={van.imageUrl} alt={van.name} width={80} />
          <div className="list--van-details">
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
      </Link>
    ) : null;
    return vanList;
  });

  return (
    <div className="host-vans-container">
      <h1 className="van-list-heading">Your listed vans</h1>
      {hostVanEls}
    </div>
  );
}
