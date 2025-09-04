import Header from "./components/Header";
import {restaurants} from "./utils/data";
import RestaurantCard from "./components/RestaurantCard";
import { useState } from "react";
function App() {
  const [res , setRes] = useState(restaurants);

  return (
    <div>
      <Header />
      <button id="filter-btn" onClick={()=>{
        const filteredList = res.filter(res => res.rating < 3);
        setRes(filteredList);
      }}>Filter</button>
      <div className="restaurant-list">
        {res.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
}
export default App;
