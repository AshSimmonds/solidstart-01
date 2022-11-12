import { A } from "solid-start";
import Counter from "~/components/Counter";

export default function About() {
    return (
        <div>
            <h1>
                About
            </h1>

            <a href="https://twitter.com/BlueDwarfAsh" >@BlueDwarfAsh</a> | <a href="https://github.com/AshSimmonds/solidstart-01">GitHub repo</a><br />
            <br />
            Have been SolidJS-curious for a while but not really played with much, so when <a href="https://twitter.com/t3dotgg/status/1590443687460614144">Theo</a> started live-streaming an interview with dev <a href="https://twitter.com/RyanCarniato/status/1589653991511982080">Ryan Carniato</a> a few hours ago <span class="text-sm">(10/Nov/2022)</span> about the newly released SolidStart I figured I'd play with it while side-eye watching the stream. It's pretty cool so far.<br />
            <br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hSECorasSK8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto mb-8"></iframe>

            <span class="text-sm">I don't really know what I'm doing yet (I mean, it's just Shiny-Object-Syndrome at this point) , so it's just basically porting some simple stuff from a React app I've been working on, with a tiny bit of tailwind malarkey.</span> <br />
            <br />
            <span class="alert alert-info">Basic project details: <a href="https://twitter.com/BlueDwarfAsh/status/1590397481082556416" class="text-info-content">https://twitter.com/BlueDwarfAsh/status/1590397481082556416</a></span>

            <h2>Vid of me messing around building the second half:</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ay6ye5icRGk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="mx-auto mb-8"></iframe>

        </div>

    )
}
