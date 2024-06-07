import SectionTitle from "./shared/SectionTitle";


function AdditionalCharges() {
    return (
        <div className="w-full">
            <SectionTitle title='Additional Charges' />
            <div className="border p-4 rounded-md">
                <div className="flex justify-between">
                    <p className="flex items-center gap-2 justify-center"> <span><input type="checkbox" defaultChecked={false} className="checkbox checkbox-xs" /> </span> Collision Damage Waiver</p>
                    <p>$9.00</p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-2 justify-center"> <span><input type="checkbox" defaultChecked={false} className="checkbox checkbox-xs" /> </span>Liability Insurance</p>
                    <p>$9.00</p>
                </div>
                <div className="flex justify-between">
                    <p className="flex items-center gap-2 justify-center"> <span><input type="checkbox" defaultChecked={false} className="checkbox checkbox-xs" /> </span>Rental Tax</p>
                    <p>$9.00</p>
                </div>
            </div>
        </div>
    );
}

export default AdditionalCharges;