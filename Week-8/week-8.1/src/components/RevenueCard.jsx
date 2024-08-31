export const RevenueCard = ({
    title,
    amount,
    orderCount,
    nextPaymentDate
}) => {
    return <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 m-5'>
    <div>
      <div className='bg-sky-700 text-slate-50 p-5 rounded-t-lg hover:bg-sky-900'>
        <div className="flex items-center">{title} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 ml-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</div>
        <div className='flex justify-between mt-2'>
          <div className='text-2xl'>&#8377; {amount}</div>
            {orderCount ? <div className="flex items-center">{orderCount} Orders <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </div> : null}
        </div>
      </div>
      <div>
        <div className='flex justify-between pl-5 pr-5 p-2 rounded-b bg-sky-900 text-slate-50'>
          <div>Next Payment Date:</div>
          <div>{nextPaymentDate}</div>
        </div>
      </div>
    </div>
  </div>
}