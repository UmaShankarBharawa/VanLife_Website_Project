import reviewImg from "../../assets/reviewBar.png"

export default function Reviews() {
  return (
    <div className="reviews-container">
      <h2 className="reviews--heading">Your review</h2>
      <h4 className="reviews--days">last <span>30 days</span></h4>
      <img src={reviewImg} alt="" width={"550px"}/>
      <h3 className="reviews--reviews">Reviews (2)</h3>
      <span className="reviews--star" style={{ color: "#FF8C38", fontSize: "32px" }}>&#x22C6;&#x22C6;&#x22C6;&#x22C6;&#x22C6;</span>
      <h4 className="reviews--name">Neeraj <span>December 9, 2024</span></h4>
      <p className="reviews--reviewed">The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
      <hr className="reviews--hr" />
      <span className="reviews--star" style={{ color: "#FF8C38", fontSize: "32px" }}>&#x22C6;&#x22C6;&#x22C6;&#x22C6;&#x22C6;</span>
      <h4 className="reviews--name">Ritesh <span>December 1, 2024</span></h4>
      <p className="reviews--reviewed">This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
      <hr className="reviews--hr" />
    </div>
  )
}
