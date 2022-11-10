import { createRouteData, RouteDataArgs, useRouteData } from "solid-start"

import { serverGetPermits } from "../../api/permits"

import { useParams } from "solid-start"





export function routeData() {
    return createRouteData(async () => {
        try {

            const params = useParams()

            const permitId = params ? params.id : undefined

            // console.log(`OverseasPayloadPermitDetailPage permitId: ${JSON.stringify(permitId, null, 4)}`)




            const overseasPayloadPermits = await serverGetPermits({ "permitId": permitId })

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

    // const thePermitItself = thePermitFunction()?.overseasPayloadPermits.records[0].fields

    console.log(`OverseasPayloadPermitDetailPage thePermitFunction()?.overseasPayloadPermits.records[0].fields: ${JSON.stringify(thePermitFunction()?.overseasPayloadPermits.records[0].fields, null, 4)}`)

    // if (!thePermitItself) {
    //     return <div>loading...</div>
    // }


    return (
        <main class="text-center mx-auto ">
            <h1>{thePermitFunction()?.overseasPayloadPermits.records[0].fields.title}</h1>

            <h3>Full source <a href="https://jsoncrack.com/editor" target="_blank" rel="noreferrer" class="underline">(JSON visualiser)</a></h3>
            <textarea class="w-full h-96 bg-slate-800 text-green-500">
                {thePermitFunction()?.overseasPayloadPermits.records[0].fields ? thePermitFunction()?.overseasPayloadPermits.records[0].fields.content as string : ''}
            </textarea>

        </main>
    )
}



