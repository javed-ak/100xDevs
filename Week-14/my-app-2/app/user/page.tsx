import axios from "axios"

async function fetchData () {
    const response = await axios.get("http://localhost:3000/api/user")
    return response.data
}

export default async function page() {
    const data = await fetchData()
    return <div className="h-screen flex justify-center items-center">
        <div className="p-8 border shadow-lg rounded-lg">
        <div className="font-bold text-lg">Name: {data.name}</div>
        <div>{data.email}</div>
    </div>
    </div>
}
