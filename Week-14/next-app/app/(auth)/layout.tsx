import React from "react"

export default function ({ children }: {
    children: React.ReactNode
}) {
    return <div>
        <div className="p-2 \ text-center">
            Signin now and get 20% discount
        </div>
        {children}
    </div>

}