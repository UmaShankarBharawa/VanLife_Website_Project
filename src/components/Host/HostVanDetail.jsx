import { useEffect, useState } from "react"
import { Link, Outlet, useParams } from "react-router-dom"

export default function HostVanDetail() {

  const params = useParams()
  const [van, setVan] = useState(null)
  console.log(van)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then((data) => {
        setVan(data.vans)
      })
  }, [params.id])

  if (!van) {
    return <h1>...loading</h1>
  }

  return (
    <div className="host-van-detail-container">
      <Link to={".."} relative="path" className='back'>&larr; <span>Back to all vans</span></Link>
      <div className="host-van-detail--van-detail">
        <img src={van.imageUrl} alt={van.name} width={250} />
        <div className="host--van--detail">
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h1>{van.name}</h1>
          <h3>${van.price}<span>/day</span></h3>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
