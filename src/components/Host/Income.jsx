import incomeImg from "../../assets/incomeChart.png"

export default function Income() {
  return (
    <div className="income-container">
      <h2 className="income--income">Income</h2>
      <h4 className="income--days">Last <span>30 days</span> </h4>
      <h1 className="income--price">$2,260</h1>
      <img src={incomeImg} alt="" width={"550px"}/>
      <div className="income--transaction">
        <h3>Your transactions (3)</h3>
        <h4 className="transaction--days">Last <span>30 days</span></h4>
      </div>
      <div className="income--pricing">
        <h2>$720</h2>
        <h4>18/11/24</h4>
      </div>
      <div className="income--pricing">
        <h2>$560</h2>
        <h4>28/11/24</h4>
      </div>
      <div className="income--pricing">
        <h2>$980</h2>
        <h4>10/12/24</h4>
      </div>
    </div>
  )
}
