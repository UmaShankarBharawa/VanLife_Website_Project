import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  // console.log(vans)
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

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
      { vans.length > 0 ? hostVanEls : <div className="loader"></div> }
    </div>
  );
}
