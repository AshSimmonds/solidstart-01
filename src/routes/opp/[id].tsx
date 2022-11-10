import { createRouteData, RouteDataArgs, useRouteData } from "solid-start"

import { serverGetPermits } from "../../api/permits"

import { useParams } from "solid-start"





export function routeData() {
    return createRouteData(async () => {
        try {

            const params = useParams()

            const permitId = params ? params.id : undefined
            
            // console.log(`OverseasPayloadPermitDetailPage permitId: ${JSON.stringify(permitId, null, 4)}`)
            



            const overseasPayloadPermits = await serverGetPermits({"permitId": permitId})

            console.log(`DETAIL PAGE | routeData createRouteData overseasPayloadPermits.records[0].fields.title: ${JSON.stringify(overseasPayloadPermits.records[0].fields.title, null, 4)}`)

            return {
                overseasPayloadPermits
            }
        } catch {
            throw new Error("Data not available")
        }
    })
}







export default function OverseasPayloadPermitDetailPage() {





    const thePermitFunction = useRouteData<typeof routeData>()

    const thePermitItself = thePermitFunction()?.overseasPayloadPermits.records[0].fields

    // const allPermitsObject = useRouteData<typeof routeData>() //serverOverseasPayloadPermitGetAll()

    // console.log(`OverseasPayloadPermitDetailPage thePermit: ${JSON.stringify(thePermit, null, 4)}`)


    return (
        <main class="text-center mx-auto ">
            <h1>{thePermitItself?.title}</h1>


        </main>
    )
}



