
import SectionTitle from "./shared/SectionTitle";


function AdditionalCharges({ register, additionalCharges }) {

    return (
        <div className="w-full">
            <SectionTitle title='Additional Charges' />
            <div className="border p-4 rounded-md">
                {
                    additionalCharges.map((charge, idx) => <div key={idx} className="flex justify-between">
                        <p className="flex items-center gap-2 justify-center"> <span><input {...register(charge.id)} type="checkbox" defaultChecked={false} className="checkbox checkbox-xs" /> </span>{charge.name}</p>
                        <p>{charge.id === 'tax' ? `${charge.rate}%`: `$${charge.price}`}</p>
                    </div>)
                }
            </div>
        </div>
    );
}

export default AdditionalCharges;