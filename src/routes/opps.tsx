
// console.log(`opps.tsx PLAIN: ${import.meta.env.VITE_AIRTABLE_API_KEY}`)

import server$ from "solid-start/server";

const logHello = server$(async (message: string) => {
    console.log(message)
})

logHello("Hello from the FRONTMATTER")


export default function OverseasPayloadPermitListPage() {

    logHello("Hello from the FUNCTION")

    return (
        <main class="text-center mx-auto ">
            <h1 >
                Overseas Payload Permits
            </h1>


        </main>
    );
}
