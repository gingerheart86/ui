import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="h-[40vh] flex">
        <div className="h-full w-full bg-footer bg-no-repeat bg-cover flex items-end">
          <div className="flex w-full h-24 relative justify-between items-end bottom-20">
            <div className="bg-black h-full w-[60%] flex pl-20">
              <Image
                src="/images/desci-global-logo.svg"
                alt="desci global logo"
                width="140"
                height="140"
              />
            </div>
            <div className="bg-white h-[60%] w-[20%]"></div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-end">
          <div className=" h-full w-full flex">
            <div className="h-full min-w-[50%] flex items-center justify-end">
              <ul className="flex flex-col items-end text-lg">
                <li>
                  <a href="" target="_blank">
                    about
                  </a>
                </li>
                <li>
                  <a href="https://molecule.to/" target="_blank">
                    molecule
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    about
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    faq
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-full w-full flex items-center justify-end text-lg pr-[8%]">
              <ul className="flex flex-col items-end text-lg">
                <li>
                  <a href="https://twitter.com/desci_global" target="_blank">
                    twitter
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    instagram
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    privacy policy
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    terms & conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full h-24 justify-between items-end mb-20">
            <div className="bg-black h-[100%] w-[50%] flex  items-center text-lg pl-4 text-white">
              Copyright 2022 Desci.Global ©
            </div>
            <div className="bg-white h-[100%] w-[50%] flex items-center justify-end text-lg pr-[8%]">
              <a href="https://openprest.com/" target="_blank">
                Designed with Openprest®
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
