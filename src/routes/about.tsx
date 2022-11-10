import { A } from "solid-start";
import Counter from "~/components/Counter";

export default function About() {
    return (
        <main class="mx-auto p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase mt-8">
                About Page
            </h1>

            <div class="p-4">
                <a href="https://twitter.com/BlueDwarfAsh" >@BlueDwarfAsh</a> | <a href="https://github.com/AshSimmonds/solidstart-01">GitHub repo</a><br />
                <br />
                Have been SolidJS-curious for a while but not really played with much, so when <a href="https://twitter.com/t3dotgg/status/1590443687460614144">Theo</a> started live-streaming an interview with dev <a href="https://twitter.com/RyanCarniato/status/1589653991511982080">Ryan Carniato</a> a few hours ago about the newly released SolidStart I figured I'd play with it while side-eye watching the stream. It's pretty cool so far.<br />
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hSECorasSK8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto mb-8"></iframe>

                <span class="text-sm">I don't really know what I'm doing yet (I mean, it's just Shiny-Object-Syndrome at this point) , so it's just basically porting some simple stuff from a React app I've been working on, with a tiny bit of tailwind malarkey.</span> <br />
                <br />
                <span class="alert alert-info">Basic project details: <a href="https://twitter.com/BlueDwarfAsh/status/1590397481082556416">https://twitter.com/BlueDwarfAsh/status/1590397481082556416</a></span>

                <h2>Vid of me messing around building the second half:</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ay6ye5icRGk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto mb-8"></iframe>                

            </div>

            <p class="mt-8">
                Visit{" "}
                <A
                    href="https://solidjs.com"
                    target="_blank"
                    class="text-sky-600 hover:underline"
                >
                    solidjs.com
                </A>{" "}
                to learn how to build Solid apps.
            </p>
            <p class="my-4">
                <A href="/" class="text-sky-600 hover:underline">
                    Home
                </A>
                {" - "}
                <span>About Page</span>
            </p>
        </main>
    );
}
