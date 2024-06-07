import { useForm } from "react-hook-form";
import SectionTitle from "./shared/SectionTitle";


function VehicleInfo() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-full">
            <SectionTitle title='Vehicle Information' />
            <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-md">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Vehicle Type<span className="text-red-500">*</span></span>
                    </div>
                    <select
                        defaultValue="default"
                        {...register("vehicle_type", { required: true })}
                        className="select select-bordered w-full">
                        <option disabled value="default"></option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>

                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Vehicle<span className="text-red-500">*</span></span>
                    </div>
                    <select
                        defaultValue="default"
                        {...register("vehicle", { required: true })}
                        className="select select-bordered w-full">
                        <option disabled value="default"></option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </label>

            </form>

        </div>
    );
}

export default VehicleInfo;