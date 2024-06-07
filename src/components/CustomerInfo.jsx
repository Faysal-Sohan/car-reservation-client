
import { useForm } from 'react-hook-form';
import SectionTitle from './shared/SectionTitle';

function CustomerInfo() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="w-full">
            <SectionTitle title='Customer Information'/>
            <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-md">
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">First Name<span className="text-red-500">*</span></span>
                    </div>
                    <input
                        {...register("first_name", { required: true })}
                        type="text"
                        className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Last Name<span className="text-red-500">*</span></span>
                    </div>
                    <input
                        {...register("last_name", { required: true })}
                        type="text"
                        className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Email<span className="text-red-500">*</span></span>
                    </div>
                    <input
                        {...register("email", {required: true})}
                        type="email"
                        className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Phone<span className="text-red-500">*</span></span>
                    </div>
                    <input
                        {...register("phone", {required: true})}
                        type="text"
                        className="input input-bordered w-full " />
                </label>
            </form>

        </div>
    );
}

export default CustomerInfo;