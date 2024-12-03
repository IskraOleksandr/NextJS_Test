import ChannelBlock from "./channelblock";
import LikeBlock from "./likeblock";
import ShortsPlayer from "./playerjs";

export default function Home() {
    return (
        <main className="flex items-center w-full">
            <div className="items-center text-sm lg:flex ml-[45%] mt-[3%]">
                <div className="relative">
                    <ShortsPlayer src={"https://www.youtube.com/shorts/bZZqKVGNrso"} id={0}/>
                    <div className="absolute bottom-4 left-0 right-0 pl-3 justify-items-start">
                        <ChannelBlock/>
                    </div>
                </div>
                <LikeBlock/>

            </div>
        </main>
    );
}