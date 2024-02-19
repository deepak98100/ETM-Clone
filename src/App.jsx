import Navbar from "./components/Navbar"
import Card from "./components/Card"
import bikes from "./components/bikes"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      {
        bikes.map((val, index) => {
          return (
            <Card key={index} bikeName={val.bikeName} imagePath={val.imagePath} frame={val.frame} product_weight={val.product_weight} wheelbase={val.wheelbase} seat={val.seat} assembly_required={val.assembly_required} assembly_time={val.assembly_time} throttle={val.throttle} controller={val.controller} motor={val.motor} suspension={val.suspension} final_drive={val.final_drive} brakes={val.brakes} tires={val.tires} recommended_age={val.recommended_age} battery_pack={val.battery_pack} power_modes={val.power_modes} battery_life={val.battery_life} charging_time={val.charging_time} charger={val.charger} battery_meter={val.battery_meter} driven_chain={val.driven_chain} display={val.display} accessories_material={val.accessories_material} lights={val.lights} />
          )
        })
      }
      <hr />
      <Footer />
    </>
  )
}

export default App
