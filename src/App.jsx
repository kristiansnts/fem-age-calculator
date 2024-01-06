import ArrowIcon from "images/icon-arrow.svg"

function App() {

  return (
    <main id="app">
      <form id="inputs">
        <div className="input__group">
          <span>Day</span>
          <input type="number" name="day" placeholder="DD"/>
        </div>
        <div className="input__group">
          <span>Month</span>
          <input type="number" name="month" placeholder="MM"/>
        </div>
        <div className="input__group">
          <span>Year</span>
          <input type="number" name="year" placeholder="YYYY"/>
        </div>
      </form>
      <div className="separator">
        <img src={ArrowIcon} alt="" className="bg-primary-purple" />
      </div>
      <div id="result">
          <div className="year__result"><span>--</span> years</div>
          <div className="month__result"><span>--</span> months</div>
          <div className="year__result"><span>--</span> days</div>
      </div>
    </main>
  )
}

export default App
