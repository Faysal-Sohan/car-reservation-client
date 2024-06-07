import { useForm } from "react-hook-form";
import SectionTitle from "./shared/SectionTitle";

function ReservationDetails() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="w-full">
            <SectionTitle title={"Reservation Details"} />
            <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-md">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Reservation ID</span>
                    </div>
                    <input
                        {...register("reservation_id")}
                        type="text"
                        className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Pickup Date<span className="text-red-500">*</span></span>
                    </div>
                    <input
                        {...register("pickup_date", { required: true })}
                        type="datetime-local"
                        className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Return Date<span className="text-red-500">*</span></span>
                    </div>
                    <input
                        {...register("return_date", { required: true })}
                        type="datetime-local"
                        className="input input-bordered w-full " />
                </label>
                <div className="mt-4 flex gap-4 items-center">
                    <p className="text-sm">Duration</p>
                    <input
                        disabled
                        type="text"
                        className="input input-bordered w-full" />
                </div>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Discount</span>
                    </div>
                    <input
                        {...register("discount")}
                        type="text"
                        className="input input-bordered w-full " />
                </label>
            </form>

        </div>
    );
}

export default ReservationDetails;