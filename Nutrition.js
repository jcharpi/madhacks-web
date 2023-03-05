import React, { useState } from "react"
import MealList from "./MealList"
import "./nutrition.css";

function NutritionCard() {
  const [mealData, setMealData] = useState(null)
  const [age, setAge] = useState(100)
  const [height, setHeight] = useState(200)
  const [weight, setWeight] = useState(500)
  const [calories, setCalories] = useState(2000)

  function getMealData() {
    calculateCalories();
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=3ec490ee8c204bc9bb52ab9e3e8168a4&timeFrame=day&targetCalories=${calories}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChange1(e) {
    setAge(e.target.value)
  }
  function handleChange2(e) {
    setHeight(e.target.value)
  }
  function handleChange3(e) {
    setWeight(e.target.value)
  }

  function calculateCalories() {
    setCalories(10*weight+6.25*height-5*age+5)
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Age"
          onChange={handleChange1}
        />
        <input
          type="number"
          placeholder="Height"
          onChange={handleChange2}
        />
        <input
          type="number"
          placeholder="Weight"
          onChange={handleChange3}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  )
}

export default NutritionCard;