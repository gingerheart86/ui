import Image from "next/image";

import { getAllPartners } from "../../../dummy-data-partners";

function PartnerLogoSection() {
  const partners = getAllPartners();

  return (
    <section>
      <div className="p-4 flex">
        <div className="w-2/4 h-[70%] flex flex-col justify-between">
          <h2 className="text-4xl pb-10">In Participation with</h2>
        </div>
      </div>
      <ul>
        <div className="flex flex-wrap p-4">
          {partners.map((partner) => (
            <li className="mr-20 mb-4 hover:scale-110 duration-100 " key={partner.id}>
              <a href={partner.Link} target="_blank" rel={"noreferrer"}>
                <div className=" w-40 flex items-center justify-center h-20">
                  <div className="relative grayscale">
                    <img src={partner.image} layout="fill" objectFit="cover" />
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

export default PartnerLogoSection;
