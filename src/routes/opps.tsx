
import { createRouteData, useRouteData } from "solid-start"

import { serverGetPermits } from "../api/permits"







export function routeData() {
    return createRouteData(async () => {
        try {

            const overseasPayloadPermits = await serverGetPermits()

            // console.log(`routeData createRouteData overseasPayloadPermits: ${JSON.stringify(overseasPayloadPermits, null, 4)}`)

            return {
                overseasPayloadPermits
            }
        } catch {
            throw new Error("Data not available")
        }
    })
}








import { A } from "solid-start"
import { For } from "solid-js"


export default function OverseasPayloadPermitListPage() {

    const allPermitsObject = useRouteData<typeof routeData>() //serverOverseasPayloadPermitGetAll()

    console.log(`OverseasPayloadPermitListPage allPermitsObject().overseasPayloadPermits: ${JSON.stringify(allPermitsObject()?.overseasPayloadPermits, null, 4)}`)



    return (
        <main class="prose mx-0 sm:mx-auto sm:w-full md:w-11/12 lg:w-10/12 xl:w-9/12 sm:p-0 md:p-4 border-0 bg-base-200 shadow-xl">
            <h1 >
                Overseas Payload Permit Applications
            </h1>

            <For each={allPermitsObject()?.overseasPayloadPermits.records}>
                {(permit: any) => (
                    <div class="mt-16">
                        <h2 ><A href={`/opp/${permit ? permit.id : ''}`}>{permit ? permit.fields.title : ''}</A></h2>
                        <pre class="h-24 overflow-hidden hover:overflow-auto hover:h-auto">
                            {permit.fields.content}
                        </pre>
                    </div>
                )}
            </For>

            <hr />
            <h2>All permit applications</h2>
            <pre class="overflow-auto h-full">
                {allPermitsObject() ? JSON.stringify(allPermitsObject(), null, 4) : ''}
            </pre>


        </main>
    )
}

















