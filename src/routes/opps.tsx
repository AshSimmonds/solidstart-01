
import { createRouteData, useRouteData } from "solid-start"

import server$ from "solid-start/server"

const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID
const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY

const airtableBaseUrl = "https://api.airtable.com/v0/" + airtableBaseId + "/"
const overseasPayloadPermitTable = "overseas_payload_permit"
const defaultFetchUrl = airtableBaseUrl + overseasPayloadPermitTable




const serverGday = server$(async (message: string) => {
    console.log(message)
})






export function routeData() {
    return createRouteData(async () => {
        try {

            const overseasPayloadPermits = await serverGetPermits()

            console.log(`routeData createRouteData overseasPayloadPermits: ${JSON.stringify(overseasPayloadPermits, null, 4)}`)

            return {
                overseasPayloadPermits
            }
        } catch {
            throw new Error("Data not available")
        }
    })
}





async function serverGetPermits(params = {}) {

    const fetchUrl = new URL(defaultFetchUrl)// + filterFormula

    fetchUrl.searchParams.set("api_key", airtableApiKey)

    Object.entries(params).forEach(([key, value]) => {
        if (value !== void 0) {
            fetchUrl.searchParams.set(key, value.toString())
        }
    })

    const response = await fetch(fetchUrl)

    if (!response.ok) {
        console.error("Error", response)
        throw new Error(response.statusText)
    }

    return await response.json()

}

















// import { A } from "solid-start"
import { For } from "solid-js"


export default function OverseasPayloadPermitListPage() {

    const allPermitsObject = useRouteData<typeof routeData>() //serverOverseasPayloadPermitGetAll()

    // console.log(`OverseasPayloadPermitListPage allPermitsObject: ${JSON.stringify(JSON.stringify(allPermitsObject, null, 4))}`)



    return (
        <main class="text-center mx-auto ">
            <h1 >
                Overseas Payload Permits
            </h1>

<For each={allPermitsObject()?.overseasPayloadPermits.records}>
    {(permit) => (
        <div>
            {/* <h2>{permit}</h2>
            <p>{permit.fields.description}</p> */}
        </div>
    )}
</For>



        </main>
    )
}

















