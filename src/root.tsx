// @refresh reload
import { Suspense } from "solid-js"
import {
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start"
import "./root.css"

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>SolidStart - With TailwindCSS</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>

                        <HeaderBar />

                        <Routes>
                            <FileRoutes />
                        </Routes>

                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    )
}




function HeaderBar() {
    return (
        <div class="navbar bg-transparent mb-4">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex={0} class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><A href="/asdf" >Stuff</A></li>
                        {/* <li tabIndex={0}>
                            <Link href="/linktwo" class="justify-between">
                                Parent
                            </Link>
                            <ul class="p-2 bg-base-100">
                                <li><Link href="/linktwosubone">Submenu 1</Link></li>
                                <li><Link href="/linktwosubtwo">Submenu 2</Link></li>
                            </ul>
                        </li> */}
                        <li><A href="/about">About</A></li>
                        <li><A href="/typography">Typography</A></li>
                        <li><A href="/opps">Overseas Payload Permits</A></li>
                    </ul>
                </div>
                <A href="/" ><img src={`/blue_dwarf_space_long_logo-undefined.png`} alt="Blue Dwarf Space logo" class="max-h-12 max-w-36 cursor-pointer" /></A>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-bold">
                    <li><A href="/asdf">Stuff</A></li>
                    <li><A href="/about">About</A></li>
                    <li><A href="/opps">Overseas Payload Permits</A></li>
                    {/* <li tabIndex={0}>
                        <Link href="/linktwo">
                            Parent
                        </Link>
                        <ul class="p-2 bg-base-100">
                            <li><Link href="/linktwosubone">Submenu 1</Link></li>
                            <li><Link href="/linktwosubtwo">Submenu 2</Link></li>
                        </ul>
                    </li> */}
                    {/* <li><Link href="/users">Users</Link></li> */}
                    {/* <li><Link href="/typography">Typography</Link></li> */}
                </ul>
            </div>
            <div class="navbar-end">
                <A href="/profile" class="btn btn-circle btn-accent">Profile</A>
                {/* {!isLoading && user?.picture ? (<Link href="/profile" class="btn btn-circle border-1 border-neutral-content"><img src={user.picture} class="w-full rounded-full" alt='avatar' /></Link>) : (<Link href="/api/auth/login" class="btn btn-circle btn-accent">Login</Link>)} */}
            </div>
        </div>
    )
}