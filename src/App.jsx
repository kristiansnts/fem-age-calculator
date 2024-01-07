/* eslint-disable no-unused-vars */
import ArrowIcon from "images/icon-arrow.svg"
import { getMaxDate, getCurrentYear } from "./hooks/formatDate"
import { useForm } from "react-hook-form";
import { useState } from "react";

function App() {
  
  const {
    register,
    getValues,
    formState: {errors}
  } = useForm({
    mode: 'onBlur'
  })

  const [age, setAge] = useState({
    years: '--',
    months: '--',
    day: '--'
  })

  const calculateAge = () => {
    const birthTime = new Date(`${getValues('year')}-${getValues('month')}-${getValues('day')}`).getTime()
    const currentTime = new Date().getTime()

    const diff = currentTime - birthTime
    const ageDate = new Date(diff)
    
    setAge({
      years: ageDate.getUTCFullYear() - 1970,
      months: ageDate.getUTCMonth(),
      day: ageDate.getUTCDate() - 1
    })
}

  return (
    <main id="app" className="h-screen flex items-center justify-center">
      <div className="bg-white p-5 w-11/12 max-w-xl rounded-t-xl rounded-bl-xl rounded-br-[80px]">
      <form id="inputs" className="flex justify-between md:w-10/12" noValidate>
        <div className="input__group mr-3 w-25">
          <span className="block mb-1 text-slate-500 text-xs tracking-widest uppercase">Day</span>
          <input className="w-full border p-3 rounded-lg focus:outline-primary-purple" type="number" name="day" placeholder="DD" 
          {...register("day", {
            max: {
              value: getMaxDate(getValues('year'), getValues('month')),
              message: "Must be a valid day"
            },
            required: {
              value: true,
              message: "This field is required"
            }
          })}
          onBlur={calculateAge}
          />
          <span className={errors.day?.message ? "text-xs italic text-red-300" : ""}>{errors.day?.message}</span>
        </div>
        <div className="input__group mr-3 w-25">
          <span className="block mb-1 text-slate-500 text-xs tracking-widest uppercase">Month</span>
          <input className="w-full border p-3 rounded-lg focus:outline-primary-purple" type="number" name="month" placeholder="MM"
          {...register("month", {
            max: {
              value: 12,
              message: "Must be a valid month"
            },
            required: {
              value: true,
              message: "This field is required"
            }
          })}
          onBlur={calculateAge}
          />
          <span className={errors.month?.message ? "text-xs italic text-red-300" : ""}>{errors.month?.message}</span>
        </div>
        <div className="input__group mr-3 w-25">
          <span className="block mb-1 text-slate-500 text-xs tracking-widest uppercase">Year</span>
          <input className="w-full border p-3 rounded-lg focus:outline-primary-purple" type="number" name="year" placeholder="YYYY"
          {...register("year", {
            max: {
              value: getCurrentYear(),
              message: "Must be in the past"
            },
            required: {
              value: true,
              message: "This field is required"
            }
          })}
          onBlur={calculateAge}
          />
          <span className={errors.year?.message ? "text-xs italic text-red-300" : ""}>{errors.year?.message}</span>
        </div>
      </form>
      <div className="separator my-12 border-b relative cursor-pointer">
        <img src={ArrowIcon} alt="" className="bg-primary-purple rounded-full w-12 p-3 md:p-3 md:w-20 md:-top-9 absolute -top-5 right-1/2 md:right-0 hover:bg-black active:bg-black focus:bg-black" onClick={calculateAge}/>
      </div>
      <div id="result" className="p-3">
          <div className="year__result text-5xl flex items-end italic font-bold"><span className="text-6xl text-primary-purple mr-3">{isNaN(age.years) ? "--" : age.years}</span> years</div>
          <div className="month__result text-5xl flex items-end italic font-bold"><span className="text-6xl text-primary-purple mr-3">{isNaN(age.months) ? "--" : age.months}</span> months</div>
          <div className="days__result text-5xl flex items-end italic font-bold"><span className="text-6xl text-primary-purple mr-3">{isNaN(age.day) ? "--" : age.day}</span> days</div>
      </div>
      </div>
    </main>
  )
}

export default App
