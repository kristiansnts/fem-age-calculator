import ArrowIcon from "images/icon-arrow.svg"

function App() {

  return (
    <main id="app" className="h-screen flex items-center justify-center">
      <div className="bg-white p-5 w-11/12 max-w-xl rounded-t-xl rounded-bl-xl rounded-br-[80px]">
      <form id="inputs" className="flex justify-between md:w-10/12">
        <div className="input__group mr-3 w-25">
          <span className="block mb-1 text-slate-500 text-xs tracking-widest uppercase">Day</span>
          <input className="w-full border p-3 rounded-lg focus:outline-primary-purple" type="number" name="day" placeholder="DD" />
        </div>
        <div className="input__group mr-3 w-25">
          <span className="block mb-1 text-slate-500 text-xs tracking-widest uppercase">Month</span>
          <input className="w-full border p-3 rounded-lg focus:outline-primary-purple" type="number" name="month" placeholder="MM"/>
        </div>
        <div className="input__group mr-3 w-25">
          <span className="block mb-1 text-slate-500 text-xs tracking-widest uppercase">Year</span>
          <input className="w-full border p-3 rounded-lg focus:outline-primary-purple" type="number" name="year" placeholder="YYYY"/>
        </div>
      </form>
      <div className="separator my-12 border-b relative cursor-pointer">
        <img src={ArrowIcon} alt="" className="bg-primary-purple rounded-full w-12 p-3 md:p-3 md:w-20 md:-top-9 absolute -top-5 right-1/2 md:right-0 hover:bg-black active:bg-black focus:bg-black" />
      </div>
      <div id="result" className="p-3">
          <div className="year__result text-5xl flex items-start italic font-bold"><span className="text-6xl text-primary-purple mr-3">--</span> years</div>
          <div className="month__result text-5xl flex items-start italic font-bold"><span className="text-6xl text-primary-purple mr-3">--</span> months</div>
          <div className="days__result text-5xl flex items-start italic font-bold"><span className="text-6xl text-primary-purple mr-3">--</span> days</div>
      </div>
      </div>
    </main>
  )
}

export default App
