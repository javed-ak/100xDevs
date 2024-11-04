import React from 'react'

function loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className="border border-zinc-100 shadow rounded-md p-4 max-w-sm w-full mx-auto fle">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-4 bg-zinc-100 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                        <div className="h-4 bg-slate-100 rounded col-span-2"></div>
                        <div className="h-4 bg-slate-100 rounded col-span-1"></div>
                    </div>
                    <div className="h-4 bg-slate-100 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default loading
