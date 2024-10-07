import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {

  const { van } = useOutletContext()

  return (
    <div className="host-van-info-container">
      <h5>Name: <span>{van.name}</span></h5>
      <h5 style={{textTransform: "capitalize"}}>Category: <span>{van.type}</span></h5>
      <h5>Description: <span>{van.description}</span></h5>
      <h5>Visibility: <span>Public</span></h5>
    </div>
  )
}
