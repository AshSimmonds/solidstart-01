
import { createRouteData, useRouteData } from "solid-start"

import { serverGetPermits } from "../api/permits"

import server$ from "solid-start/server"





// const serverGday = server$(async (message: string) => {
//     console.log(message)
// })






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

















