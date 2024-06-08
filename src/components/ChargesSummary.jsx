import SectionTitle from "./shared/SectionTitle";


function ChargesSummary({ charges }) {
    const totalPrice = charges.reduce((acc, charge) => acc + charge.unit * charge.rate, 0);

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
                        {
                            charges.map(charge => <tr key={charge.id} className="border-b-0">
                            <td>{charge.title}</td>
                            <td className="text-center">{charge.unit}</td>
                            <td className="text-end">${charge.rate}</td>
                            <td className="text-end">${charge.unit * charge.rate}</td>
                        </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-start">Total</td>
                            <td></td>
                            <td></td>
                            <td className="text-end">${totalPrice}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default ChargesSummary;