import { A } from "solid-start";

export default function BlankPage() {
    return (
        <main class="text-center mx-auto ">
            <h1 >
                Not Found
            </h1>
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
                <A href="/" class="text-sky-600 hover:underline">
                    Home
                </A>
                {" - "}
                <A href="/about" class="text-sky-600 hover:underline">
                    About Page
                </A>
            </p>
        </main>
    );
}
