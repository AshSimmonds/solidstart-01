import { A, createRouteData, RouteDataArgs, useRouteData } from "solid-start"

import { serverGetPermits } from "../../api/permits"

import { useParams } from "solid-start"
import PageTitle from "~/components/PageTitle"





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
            <PageTitle>{thePermitFunction()?.overseasPayloadPermits.records[0].fields.title}</PageTitle>
            <h1>{thePermitFunction()?.overseasPayloadPermits.records[0].fields.title}</h1>

            <p>
                Can't be bothered with the rest of the dashboard yet, this was just a proof of concept and familiarise myself with SolidJS. There's a vid of build process on the <A href="/about">About page</A>.
            </p>

            <h3>Full source (copy paste it into <a href="https://jsoncrack.com/editor" target="_blank" rel="noreferrer" class="underline">JSON visualiser)</a></h3>
            <textarea class="w-full h-96 bg-slate-800 text-green-500">
                {thePermitFunction()?.overseasPayloadPermits.records[0].fields ? thePermitFunction()?.overseasPayloadPermits.records[0].fields.content as string : ''}
            </textarea>

        </main>
    )
}



