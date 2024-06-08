
import SectionTitle from "./shared/SectionTitle";
// import moment from "moment";


function ReservationDetails({  setPickupDate, duration, calculateDuration, register }) {
    

    // const today = moment().format('YYYY-MM-DDTHH:mm');

    return (
        <div className="w-full">
            <SectionTitle title={"Reservation Details"} />
            <div className="border p-4 rounded-md">
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
                        {...register("pickup_date",
                            {
                                required: true,
                            })}
                        type="datetime-local"
                        onBlur={(event) => setPickupDate(event.target.value)}
                        className="input input-bordered w-full " />
                   
                </label>
                {/* {errors.pickup_date && <p>{errors.pickup_date.message}</p>} */}
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Return Date<span className="text-red-500">*</span></span>
                    </div>
                    <input
                        {...register("return_date", { required: true })}
                        type="datetime-local"
                        onBlur={calculateDuration}
                        className="input input-bordered w-full " />
                </label>
                <div className="mt-4 flex gap-4 items-center">
                    <p className="text-sm">Duration</p>
                    <input
                        {...register('duration')}
                        readOnly
                        type="text"
                        value={duration}
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
            </div>

        </div>
    );
}

export default ReservationDetails;