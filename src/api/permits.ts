const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID
const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY

const airtableBaseUrl = "https://api.airtable.com/v0/" + airtableBaseId + "/"
const overseasPayloadPermitTable = "overseas_payload_permit"
const defaultFetchUrl = airtableBaseUrl + overseasPayloadPermitTable


export async function serverGetPermits(params = {}) {

    console.log(`API | serverGetPermits params?.["permitId"]: ${params?.["permitId"]}`)

    let filterFormula = ''

    if (params?.["permitId"]) {
        // filterFormula = encodeURI(`?filterByFormula={user_id}="${userId ? userId : 'asdf'}"`)
        filterFormula = encodeURI(`?filterByFormula={record_id}="${params?.["permitId"]}"`)
    }

    const fetchUrl = new URL(defaultFetchUrl + filterFormula)

    fetchUrl.searchParams.set("api_key", airtableApiKey)

    // Object.entries(params).forEach(([key, value]) => {
    //     if (value !== void 0) {
    //         fetchUrl.searchParams.set(key, value.toString())
    //         console.log(`API | serverGetPermits fetchUrl.searchParams:, (${fetchUrl.searchParams["permitId"]})`)
    //     }
    // })

    const response = await fetch(fetchUrl)

    if (!response.ok) {
        console.error("Error", response)
        throw new Error(response.statusText)
    }

    return await response.json()

}


