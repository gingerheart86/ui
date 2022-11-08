import Image from "next/image";

import { getAllContributors } from "../../../dummy-data-contributor.js";

function ContributorsSection() {
  const contributors = getAllContributors();

  return (
    <section className="pb-20">
      <div className="p-4 flex">
        <div className="w-2/4 h-[70%] flex flex-col justify-between">
          <h2 className="text-4xl pb-10">Contributors</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquam orci nec elit congue sodales a quis erat. Quisque eget est
            quis orci ornare interdum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Done aliquam orci nec elit congue sodales a quis
            erat. Quisque eget est quis orci ornare interdum. Done aliquam orci
            nec elit congue sodales a quis erat. Quisque eget est quis orci
            ornare interdum.
          </p>
        </div>
      </div>
      <ul>
        <div className="flex flex-wrap p-4">
          {contributors.map((contributor) => (
            <li className="mr-4 mb-4" key={contributor.id}>
              <a
                href={contributor.twitterLink}
                target="_blank"
                rel={"noreferrer"}
              >
                <div className="grid h-40 w-40">
                  <div className=" h-[100%] relative grayscale">
                    <Image
                      alt={contributor.name}
                      src={contributor.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="bg-black absolute h-40 w-40 z-1 opacity-0 text-white items-center flex justify-center hover:opacity-80 ease-in duration-100">
                    {"@" + contributor.name}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
}

export default ContributorsSection;
