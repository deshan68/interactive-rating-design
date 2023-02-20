import { useState } from "react";
import "./App.css";
import star from "./assets/icon-star.svg";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const ratingItems = [1, 2, 3, 4, 5];
  const [selectedRate, setSelectedrate] = useState(-1);
  const [submitRate, setSubmitRate] = useState(false);

  return (
    <div className="App">
      {submitRate == false ? (
        <>
          <div className="rating-card">
            <div className="star-icon-background">
              <img src={star} alt="" />
            </div>
            <div className="card-title">How did we do?</div>
            <div className="card-pharagraph">
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering
              </p>
            </div>
            <div className="rating-items">
              {ratingItems.map((item, indx) => (
                <div
                  key={indx}
                  className={
                    indx == selectedRate ? "active-rating-item" : "rating-item"
                  }
                  // style={{
                  //   backgroundColor: indx == ClickedItemIndx ? "red" : null,
                  // }}
                  onClick={() => setSelectedrate(indx)}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="submit-button" onClick={() => setSubmitRate(true)}>
              <button disabled={selectedRate == -1 ? true : false}>
                SUBMIT
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <ThankYouCard selectedRate={selectedRate + 1} />
        </>
      )}
    </div>
  );
}

export default App;
