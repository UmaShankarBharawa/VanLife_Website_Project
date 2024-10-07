import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {

  const { van } = useOutletContext()

  return (
    <img src={van.imageUrl} alt={van.name} width={140} className="host-van-photo" />
  )
}
