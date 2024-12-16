import { Await, defer, Link, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import { Suspense } from "react";


export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getHostVans() })
}

export default function Dashboard() {

    const dataPromise = useLoaderData()

    function vanElements(vans) {
        const hostVanEls = vans.map((van) => {
            const vanList = (
                <div key={van.id} className="dashboard-van">
                    <div className="dashboard-list-van">
                        <img src={van.imageUrl} alt={van.name} width={80} />
                        <div className="dashboard-list--van-details">
                            <h3>{van.name}</h3>
                            <h4>${van.price}/day</h4>
                        </div>
                        <Link className="dashboard-list--link">Edit</Link>
                    </div>
                </div>
            )
            return vanList
        })
        return hostVanEls
    }

    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard--welcome">
                    <h1 className="welcome--details">Welcome!</h1>
                    <h5 className="welcome--details">Income last <u>30 days</u></h5>
                    <h1 className="welcome--details">$2,260</h1>
                    <Link to={"income"} className="welcome--details">Details</Link>
                </div>
                <div className="dashboard--review">
                    <h2 className="review--details">Review score <span style={{ color: "#FF8C38", fontSize: "32px" }}>&#x22C6;</span>5.0<span style={{ fontWeight: "normal", color: "#4D4D4D" }}>/5</span></h2>
                    <Link to={"reviews"} className="review--details">Details</Link>
                </div>
                <div className="dashboard--vans">
                    <div className="dashboard-vans--div">
                        <h2 className="dashboard-vans--heading">Your listed vans</h2>
                        <Link to="/vans" className="dashboard--view-all">View all</Link>
                    </div>
                    <Suspense fallback={<h1 className="loader"></h1>}>
                        <Await resolve={dataPromise.vans}>
                            {vanElements}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <Outlet />
        </>
    )
}
