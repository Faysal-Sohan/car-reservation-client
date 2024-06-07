import SectionTitle from "./shared/SectionTitle";


function ChargesSummary() {
    return (
        <div className="w-full">
            <SectionTitle title='Charges Summary' />
            <div className="overflow-x-auto border rounded-md bg-indigo-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="border-b-0 text-black">
                            <th className="w-1/2">Charge</th>
                            <th className="text-center">Unit</th>
                            <th className="text-center">Rate</th>
                            <th className="text-center">Total</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {/* row 1 */}
                        <tr className="border-b-0">
                            <td>Daily</td>
                            <td className="text-center">1</td>
                            <td className="text-end">$99.00</td>
                            <td className="text-end">$99.00</td>
                        </tr>
                        <tr className="border-b-0">
                            <td>Weekly</td>
                            <td className="text-center">1</td>
                            <td className="text-end">$390.00</td>
                            <td className="text-end">$99.00</td>
                        </tr>
                        <tr className="border-b-0">
                            <td>Collision Damage Waiver</td>
                            <td className="text-center"></td>
                            <td className="text-end">$9.00</td>
                            <td className="text-end">$9.00</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ChargesSummary;