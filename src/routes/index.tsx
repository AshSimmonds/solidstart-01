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
        "buttonLink": "/about",
        "colorClass": ""
    },
    {
        "buttonText": "Stuff (neutral)",
        "buttonLink": "/asdf",
        "colorClass": "neutral"
    },
    {
        "buttonText": "O.P.P. (primary)",
        "buttonLink": "/opps",
        "colorClass": "primary"
    },
    {
        "buttonText": "Typography (secondary)",
        "buttonLink": "/typography",
        "colorClass": "secondary"
    },
    {
        "buttonText": "Blank (accent)",
        "buttonLink": "/blank",
        "colorClass": "accent"
    },
    {
        "buttonText": "Blank (info)",
        "buttonLink": "/blank",
        "colorClass": "info"
    },
    {
        "buttonText": "Blank (success)",
        "buttonLink": "/blank",
        "colorClass": "success"
    },
    {
        "buttonText": "Blank (warning)",
        "buttonLink": "/blank",
        "colorClass": "warning"
    },
    {
        "buttonText": "Blank (error)",
        "buttonLink": "/blank",
        "colorClass": "error"
    },
    {
        "buttonText": "Blank (disabled)",
        "buttonLink": "/blank",
        "colorClass": "disabled"
    },
]



export default function Home() {

    const clientMessage = clientGday('dude')
    const serverMessage = serverGday('sweet')

    return (
        <div class="flex flex-col items-center justify-center mx-auto p-4">

            <h1>SolidJS with Solid Start beta</h1>

            <div class="bg-base-100 p-12">
                <img src={`/moonlogo_small.png`} alt="Blue Dwarf Space logo" class="mx-auto w-full sm:w-1/3 md:w-2/3" />
            </div>

            <div class="w-full grid gap-8 grid-cols-2 mt-12 mb-8">
                <For each={buttonList}>
                    {(button) => (
                        <A href={button.buttonLink} class={`translucent btn btn-${button.colorClass} bg-opacity-20 text-2xl leading-5`}>{button.buttonText}</A>
                    )}
                </For>
            </div>
        </div>
    )
}
