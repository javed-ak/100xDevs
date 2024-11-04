import axios from "axios"

async function fetchData () {
    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    return response.data
}

export default async function page() {
    const data = await fetchData()
    return <div className="p-8 border">
        <div>Name: {data.name}</div>
        <div>{data.email}</div>
    </div>
}
