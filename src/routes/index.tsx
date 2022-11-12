import { A } from "solid-start";
import Counter from "~/components/Counter";


import server$ from "solid-start/server"
import { For } from "solid-js";

const serverGday = server$(async (message: string) => {
    const theMediumIsNotTheMessage = `G'day from SERVER, ${message}`
    console.log(theMediumIsNotTheMessage)

    return theMediumIsNotTheMessage
})

const clientGday = (message: string) => {
    const theMediumIsNotTheMessage = `G'day from CLIENT, ${message}`
    console.log(theMediumIsNotTheMessage)

    return theMediumIsNotTheMessage
}


const buttonList = [
    {
        "buttonText": "About",
        "buttonLink": "/about"
    },
    {
        "buttonText": "Stuff",
        "buttonLink": "/asdf"
    },
    {
        "buttonText": "Overseas Payload Permit",
        "buttonLink": "/opps"
    },
    {
        "buttonText": "Typography",
        "buttonLink": "/typography"
    },
]



export default function Home() {

    const clientMessage = clientGday('dude')
    const serverMessage = serverGday('sweet')

    return (
        <div class="flex flex-col items-center justify-center mx-auto p-4">

            <h1>SolidJS with Solid Start beta</h1>

            <img src={`/moonlogo_small.png`} alt="Blue Dwarf Space logo" class="w-full sm:w-1/3 md:w-2/3" />

            <div class="w-full grid gap-8 grid-cols-2 mt-12 mb-8">
                <For each={buttonList}>
                    {(button) => (
                        <A href={button.buttonLink} class="btn btn-primary bg-opacity-20 uppercase text-xl leading-5">{button.buttonText}</A>
                    )}
                </For>
            </div>
        </div>
    )
}
