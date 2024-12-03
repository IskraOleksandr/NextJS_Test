import SearchComponent from "./algoliasearch";
import Aside from "./aside/aside";
import OpenDialogButton from "./open-dialog-button";

export default function Home() {
    return (
/*        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SearchComponent/>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Aside/>
                <OpenDialogButton/>
            </div>
        </main>*/
        <>
            <div
                className="flex justify-between px-[5%] py-3.5 fixed top-0 right-0 left-0 bg-white dark:bg-neutral-950 z-40 max-lg:py-3 max-lg:px-[3%]">
                <a href="/">
                    <p>🚂</p>
                </a>

                <div
                    className="flex space-x-4 w-[50%] max-lg:w-[30%] max-lg:space-x-3 max-lg:flex-1 max-lg:px-[10%] max-[520px]:hidden">
                    <input
                        placeholder={"search"}

                        className="rounded-full px-3 relative pr-14 outline-blue h-9 w-full dark:bg-neutral-900 dark:outline-0"
                    />
                </div>

                {/*<HeaderBlock/>*/}
            </div>
            <div className="flex space-x-4 flex-1">
                <div
                    className="header-search border flex-1 border-neutral-200 rounded-full relative dark:border-neutral-700">
                    <Aside/>
                </div>
                <div style={{marginTop:"150px"}} className="pl-[20%] w-full max-w-[1300px] flex justify-center max-lg:pl-[12%] max-sm:pl-0">
                    {/* <UnlimitedScrollBlock  /> */}
                    <OpenDialogButton/>
                </div>
            </div>
        </>
    );
}
