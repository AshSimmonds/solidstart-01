import { A } from "solid-start";
import Counter from "~/components/Counter";


import server$ from "solid-start/server"

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


export default function Home() {

    const clientMessage = clientGday('dude')
    const serverMessage = serverGday('sweet')

    return (
        <main class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
                Hello world!
            </h1>

            <h2>{clientMessage}</h2>
            {/* TODO: figure out async in solidjs <h2>{serverMessage ? serverMessage : ''}</h2> */}

            <Counter />
            <p class="mt-8">
                Visit{" "}
                <a
                    href="https://solidjs.com"
                    target="_blank"
                    class="text-sky-600 hover:underline"
                >
                    solidjs.com
                </a>{" "}
                to learn how to build Solid apps.
            </p>
            <p class="my-4">
                <span>Home</span>
                {" - "}
                <A href="/about" class="text-sky-600 hover:underline">
                    About Page
                </A>{" "}
            </p>
        </main>
    );
}
