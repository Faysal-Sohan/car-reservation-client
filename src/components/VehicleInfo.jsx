import SectionTitle from "./shared/SectionTitle";
import useCar from "../hooks/useCar";
import { useState } from "react";


function VehicleInfo({setVehicle, setVehicleType, register}) {
    const [cars] = useCar();
    
    const [vehicleOptions, setVehicleOptions] = useState([]);

    const vehicleTypeOptions = [...new Set(cars.map(car => car.type))];
    const handleVehicleOptions = (event) => {
        const type = event.target.value;
        setVehicleType(type);
        const filteredVehicleType = cars.filter(car => car.type === type)
        setVehicleOptions(filteredVehicleType);
    }


    

    return (
        <div className="w-full">
            <SectionTitle title='Vehicle Information' />
            <div className="border p-4 rounded-md">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Vehicle Type<span className="text-red-500">*</span></span>
                    </div>
                    <select
                        defaultValue="default"
                        {...register("vehicle_type", { required: true })}
                        className="select select-bordered w-full"
                        onChange={handleVehicleOptions}
                        >
                        <option disabled value="default"></option>
                        {
                            vehicleTypeOptions.map((item,idx) => <option key={idx} value={item}>{item}</option>)
                        }
                    </select>

                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Vehicle<span className="text-red-500">*</span></span>
                    </div>
                    <select
                        defaultValue="default"
                        {...register("vehicle", { required: true })}
                        className="select select-bordered w-full"
                        onChange={(event) => setVehicle(event.target.value)}
                        >
                        <option disabled value="default"></option>
                       {
                        vehicleOptions.map((vehicle, idx) => <option key={idx} value={vehicle.id}>{vehicle.make}</option>)
                       }
                    </select>
                </label>

            </div>

        </div>
    );
}

export default VehicleInfo;