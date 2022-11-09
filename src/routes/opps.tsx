import { A } from "solid-start"


export default async function OverseasPayloadPermitListPage() {

    const allPermitsObject = await serverOverseasPayloadPermitGetAll()

    console.log(`OverseasPayloadPermitListPage allPermitsObject: ${JSON.stringify(JSON.stringify(allPermitsObject, null, 4))}`)

    return (
        <main class="text-center mx-auto ">
            <h1 >
                Overseas Payload Permits
            </h1>


        </main>
    )
}








import server$ from "solid-start/server"

const serverGday = server$(async (message: string) => {
    console.log(message)
})



const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID
const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY
const overseasPayloadPermitTable = "overseas_payload_permit"
const airtableBaseUrl = "https://api.airtable.com/v0/" + airtableBaseId + "/"

const defaultFetchUrl = airtableBaseUrl + overseasPayloadPermitTable



const serverOverseasPayloadPermitGetAll = server$(async () => {

    const fetchUrl = defaultFetchUrl// + filterFormula


    const fetchResult = await fetch(fetchUrl, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + airtableApiKey,
            "Content-Type": "application/json"
        }
    }).then(airtableResult => airtableResult.json())
        .then(async airtableJson => {
            if (airtableJson.records.length > 0) {

                // console.log(`_fetchFromAirtable airtableJson: ${JSON.stringify(airtableJson, null, 4)}`)

                return airtableJson

            } else {
                // TODO: dunno
            }
        }).catch((error: Error) => {
            console.error(`opps.tsx serverOverseasPayloadPermitGetAll error: ${error}`)
            return error
        })






    // Airtable doesn't return false booleans, so it comes through as undefined, real fucking helpful
    // if (!fetchResult.records[0].fields.MISSING_FIELD) {
    //     fetchResult.records[0].fields.MISSING_FIELD = false
    // }

    console.log(`opps.tsx serverOverseasPayloadPermitGetAll fetchResult: ${JSON.stringify(fetchResult, null, 4)}`)

    return fetchResult



})









