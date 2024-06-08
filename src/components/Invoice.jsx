import logo from '../assets/car-rental.png'

function Invoice() {
    return (
        <div className="container mx-auto grid grid-cols-2 gap-2 text-sm border px-4 py-2">
            <div className='space-y-4'>
                <div className='flex justify-between'>
                    <img src={logo} alt="" className='w-32' />
                    <div className='w-1/2'>
                        <p>CH Car Place Inc</p>
                        <p>162 Bergen st</p>
                        <p>Brooklyn, NY 11213</p>
                        <p>PH#</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2 mt-12'>
                        <h3>RENTER INFO</h3>
                        <p>Shihab Ahmed</p>
                        <p>test@gmail.com</p>
                        <p>PH: 05194569</p>
                    </div>
                    <div className='flex-1'>
                        <p>Monday 9:00 AM-6.00 PM</p>
                        <p>Monday 9:00 AM-6.00 PM</p>
                        <p>Monday 9:00 AM-6.00 PM</p>
                        <p>Monday 9:00 AM-6.00 PM</p>
                        <p>Monday 9:00 AM-6.00 PM</p>
                        <p>Monday 9:00 AM-6.00 PM</p>
                        <p>Monday 9:00 AM-6.00 PM</p>
                    </div>
                </div>
                <h3 className='text-xl uppercase'>Additional Authorized Driver(s)</h3>
                <div>
                    <h3>UNIT DETAILS</h3>
                    <p>Unit: NISSAN ROGUE BLACK</p>
                    <p>Make & Model: NISSAN ROUGE BLACK</p>
                </div>
                <div>
                    <p>BILL TO: </p>
                    <p>Payment Type: Unpaid</p>
                    <p>AUTH: $0.00</p>
                </div>
                <div>
                    <p>Referral:</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quisquam delectus minima dolorem consequatur. Quas illum animi harum, ipsa pariatur exercitationem nisi eius ad est laudantium beatae mollitia corporis dignissimos? Nihil, pariatur quisquam. Natus hic quidem iste! Quia, odit debitis commodi, ducimus magni quis eum odio dolorem reprehenderit perspiciatis dolorum.</p>
                </div>
                <div className='flex justify-around'>
                    <p>Accept</p>
                    <p>Reject</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias quae voluptas esse quaerat, consectetur cumque quasi, omnis assumenda eligendi suscipit quidem excepturi odit dolore eos aperiam tenetur quas. Fugiat tenetur velit iure necessitatibus modi eum aut deleniti! Mollitia, libero nostrum et repellat autem eligendi dolorem architecto eos cupiditate nam.</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-2xl'>RESERVATION</h1>
                <h2 className='font-bold text-xl'>RA#0121</h2>
                <h4 className='text-xl'>REPAIR ORDER:</h4>
                <h4 className='text-xl'>CLAIM:</h4>
                <p>Date/Time Out: 03/29/2024 12:33 AM</p>
                <p>Date/Time In: 03/29/2024 12:33 AM</p>
                <div className='bg-slate-200'>
                    <h3 className='font-bold text-2xl'>Charges Summary</h3>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="border-b-0 text-black">
                                <th className="w-1/2"></th>
                                <th className="text-center">Unit</th>
                                <th className="text-center">Rate</th>
                                <th className="text-center">Total</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="border-b-0">
                                <td>Weekly</td>
                                <td>1</td>
                                <td className="text-end">$0.50</td>
                                <td className="text-end">$0.50</td>
                            </tr>
                            <tr className="border-b-0">
                                <td>Weekly</td>
                                <td>1</td>
                                <td className="text-end">$0.50</td>
                                <td className="text-end">$0.50</td>
                            </tr>
                            <tr className="border-b-0">
                                <td>Weekly</td>
                                <td>1</td>
                                <td className="text-end">$0.50</td>
                                <td className="text-end">$0.50</td>
                            </tr>
                            <tr className="border-b-0">
                                <td>Weekly</td>
                                <td>1</td>
                                <td className="text-end">$0.50</td>
                                <td className="text-end">$0.50</td>
                            </tr>
                            <tr className="border-b-0">
                                <td>Weekly</td>
                                <td>1</td>
                                <td className="text-end">$0.50</td>
                                <td className="text-end">$0.50</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
                <div className='my-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt rem, quos atque a enim dicta labore nisi laboriosam non commodi vel sapiente voluptatem ipsam debitis expedita aut sunt cumque omnis dolores veritatis. Sequi corporis voluptatem magnam ab recusandae accusamus nisi soluta? Repellendus deserunt molestias aliquid eos, earum tempora eligendi adipisci nihil suscipit dicta illo nobis qui, debitis placeat dolore corporis iure reiciendis! Consectetur harum ratione vel aliquam, eligendi, aspernatur, repellendus quis accusantium exercitationem dignissimos error quibusdam illo nostrum? Facere tempora ut aspernatur itaque molestias! Placeat, dignissimos ducimus tempore atque fugit totam reiciendis accusamus et dolorum laboriosam aspernatur, debitis nisi.</p>
                </div>
                <div className='space-y-2'>
                    <p className=' border-b'>Renters Signature</p>
                    <p className=' border-b'>Additional Drivar 1</p>
                </div>
            </div>

        </div>
    );
}

export default Invoice;