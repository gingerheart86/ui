import Image from "next/image";
import VideoIcon from "../../icons/VideoIcon";
import { getVideos } from "../../../dummy-data-video";

function VideoSection() {
  const videos = getVideos();
  const videodesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec aliquam orci nec elit congue sodales a quis erat.";
  return (
    <section>
      <div className="h-[100vh] mb-16 flex items-center justify-center">
        <div className="h-[100%] w-[74%]">
          <h2 className="text-4xl text-black pt-5 min-h-[15%]">Videos</h2>
          <div className="grid grid-rows-2 grid-cols-2 gap-10 h-[85%] border border-white">
            <div>
              <a href={videos[0].link} target={"_blank"}>
                <div className=" h-[80%] relative">
                  <Image
                    src={videos[0].image}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                    <VideoIcon />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full">
                    <h3 className="text-xl">{videos[0].title}</h3>
                  </div>
                  <div className="w-full">
                    <p className="text">
                      {videos[0].description.substring(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href={videos[1].link} target={"_blank"}>
                <div className=" h-[80%] relative">
                  <Image
                    src={videos[1].image}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                    <VideoIcon />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full">
                    <h3 className="text-xl">{videos[1].title}</h3>
                  </div>
                  <div className="w-full">
                    <p className="text">
                      {videos[1].description.substring(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href={videos[2].link} target={"_blank"}>
                <div className=" h-[80%] relative">
                  <Image
                    src={videos[2].image}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                    <VideoIcon />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full">
                    <h3 className="text-xl">{videos[2].title}</h3>
                  </div>
                  <div className="w-full">
                    <p className="text">
                      {videos[2].description.substring(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div>
            <a href={videos[3].link} target={"_blank"}>
                <div className=" h-[80%] relative">
                  <Image
                    src={videos[3].image}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                    <VideoIcon />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full">
                    <h3 className="text-xl">{videos[3].title}</h3>
                  </div>
                  <div className="w-full">
                    <p className="text">
                      {videos[3].description.substring(0, 100) + "..."}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
