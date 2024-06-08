import { useForm } from "react-hook-form"
import AdditionalCharges from "./components/AdditionalCharges"
import ChargesSummary from "./components/ChargesSummary"
import CustomerInfo from "./components/CustomerInfo"
import ReservationDetails from "./components/ReservationDetails"
import VehicleInfo from "./components/VehicleInfo"
import moment from "moment"
import { useEffect, useState } from "react"
import useCar from "./hooks/useCar"


function App() {
  const [cars] = useCar();

  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [vehicleType, setVehicleType] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [charges, setCharges] = useState([]);

  useEffect(() => {
    if (pickupDate && returnDate && vehicle && vehicleType ){
      // do  calculations
      const carInfo = cars.find(car => car.id === vehicle)
      let newCharge = [];
      if (weeks) {
        newCharge.push({id: 1, title: 'Weekly', unit: weeks, rate: parseFloat(carInfo.rates.weekly)})
      }
      if (days) {
        newCharge.push({id: 2, title: 'Daily', unit: days, rate: parseFloat(carInfo.rates.daily)})
      }
      if (hours) {
        newCharge.push({id: 3, title: 'Hourly', unit: hours, rate: parseFloat(carInfo.rates.hourly)})
      }

      setCharges(newCharge);

    }
  },[pickupDate, returnDate, vehicle, vehicleType])

  const { handleSubmit, register } = useForm();
  const onSubmit = data => console.log('form data',data);

  const calculateDuration = (event) => {
    const date = event.target.value;
    setReturnDate(date);

    const diff = moment.duration(moment(date).diff(moment(pickupDate)));

    setWeeks(Math.floor(diff.asWeeks()));
    setDays(Math.floor(diff.asDays() % 7));
    setHours(Math.floor(diff.asHours() % 24));

  }

  
  console.log(cars)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto my-12">
      <div className="flex justify-between mb-12">
        <h1 className="font-bold text-4xl">Reservation</h1>
        <input className="btn btn-primary normal-case" type="submit" value='Print/Download'></input>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ReservationDetails register={register} pickupDate={pickupDate} setPickupDate={setPickupDate} duration={`${weeks} Weeks ${days} Days ${hours} Hours`} calculateDuration={calculateDuration}/>
        <CustomerInfo register={register} />
        <ChargesSummary charges={charges}/>
        <VehicleInfo register={register}  setVehicleType={setVehicleType} setVehicle={setVehicle}/>
        <AdditionalCharges register={register} />
      </div>
    </form>
  )
}

export default App
