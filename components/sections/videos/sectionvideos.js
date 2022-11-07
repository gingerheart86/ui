import Image from "next/image";
import VideoIcon from "../../icons/VideoIcon";

function VideoSection() {
  const videodesc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec aliquam orci nec elit congue sodales a quis erat.";
  return (
    <section>
      <div className="h-[100vh] mb-16 flex items-center justify-center">
        <div className="h-[100%] w-[74%]">
          <h2 className="text-4xl text-black pt-5 min-h-[15%]">Videos</h2>
          <div className="grid grid-rows-2 grid-cols-2 gap-8 h-[85%] border border-white">
            <div>
              <div className=" h-[80%] relative">
                <Image
                  src="/images/video1.png"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                  <VideoIcon />
                </div>
              </div>
              <div className="flex pt-2">
                <div className="w-32">
                  <h3 className="text-xl">Video</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text">{videodesc.substring(0, 100) + "..."}</p>
                </div>
              </div>
            </div>
            <div>
              <div className=" h-[80%] relative">
                <Image
                  src="/images/video1.png"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                  <VideoIcon />
                </div>
              </div>
              <div className="flex pt-2">
                <div className="w-32">
                  <h3 className="text-xl">Video</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text">{videodesc.substring(0, 100) + "..."}</p>
                </div>
              </div>
            </div>
            <div>
              <div className=" h-[80%] relative">
                <Image
                  src="/images/video1.png"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                  <VideoIcon />
                </div>
              </div>
              <div className="flex pt-2">
                <div className="w-32">
                  <h3 className="text-xl">Video</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text text-ellipsis">{videodesc}</p>
                </div>
              </div>
            </div>
            <div>
              <div className=" h-[80%] relative">
                <Image
                  src="/images/video2.png"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="w-12 h-12 right-4 bottom-4 flex items-center justify-center absolute">
                  <VideoIcon />
                </div>
              </div>
              <div className="flex pt-2">
                <div className="w-32">
                  <h3 className="text-xl">Video</h3>
                </div>
                <div className="w-full pl-8">
                  <p className="text">{videodesc.substring(0, 100) + "..."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
