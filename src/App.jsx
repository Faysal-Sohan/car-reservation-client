import AdditionalCharges from "./components/AdditionalCharges"
import ChargesSummary from "./components/ChargesSummary"
import CustomerInfo from "./components/CustomerInfo"
import ReservationDetails from "./components/ReservationDetails"
import VehicleInfo from "./components/VehicleInfo"


function App() {

  return (
    <div className="container mx-auto my-12">
      <div className="flex justify-between mb-12">
        <h1 className="font-bold text-4xl">Reservation</h1>
        <button className="btn btn-primary normal-case">Print/Download</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
          <ReservationDetails/>
          <CustomerInfo/>
          <ChargesSummary/>
          <VehicleInfo/>
          <AdditionalCharges/>
      </div>
    </div>
  )
}

export default App
