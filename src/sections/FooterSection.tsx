import { Icon } from "@iconify/react/dist/iconify.js";
import { IconCustomButton } from "../components/CustomButton";
import ComponentContainer from "../layout/SectionContainer";

const FooterSection = () => {
  const Title = ({ text }: { text: string }) => (
    <p className="text-xl font-semibold font-playfair text-secondary">{text}</p>
  );
  const Desc = ({ text }: { text: string }) => (
    <p className="text-gray-400 text-sm">{text}</p>
  );
  const LinkText = ({ text }: { text: string }) => (
    <p className="text-secondary border-b w-fit border-dotted text-[14px] font-playfair">
      {text}
    </p>
  );

  return (
    <div className="w-full overflow-hidden" id="footer">
        <ComponentContainer extraStyle="flex flex-col justify-end items-center gap-8">
          <div className="flex gap-8 flex-col w-[85%] py-8">
            <div className="w-full flex justify-between">
              <div className="flex gap-8 items-center">
                <p className="text-2xl font-bold text-white font-mono">
                  RESTORESTO
                </p>
                <div className="flex gap-2 items-center font-playfair text-white">
                  <p className="text-secondary">En</p>
                  <p>/</p>
                  <p>Fr</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p className="font-playfair text-white">Follow us:</p>
                <div className="flex w-fit">
                  <IconCustomButton icon="line-md:facebook" />
                  <IconCustomButton icon="line-md:instagram" />
                  <IconCustomButton icon="line-md:twitter-x" />
                  <IconCustomButton icon="line-md:tiktok" />
                </div>
              </div>
            </div>
            <div className="w-full border border-t border-dotted border-secondary h-[1px]"></div>
            <div className="flex w-full justify-between">
              <div className="w-full gap-4 flex flex-col">
                <Title text="About us" />
                <Desc
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, mollitia, possimus id itaque reprehenderit neque
              praesentium aperiam earum doloribus ab ea harum vel dolore at
              totam. Ex rerum assumenda minima."
                />
                <LinkText text="Read more" />
              </div>
              <div className="w-full gap-4 flex flex-col">
                <Title text="Contact info" />
                <div className="flex flex-col gap-2">
                  <div className="gap-8 flex">
                    <p className="w-[100px] text-white font-poppins text-[14px]">
                      Call:
                    </p>
                    <div className="flex">
                      <p className="text-white font-poppins text-[14px]">
                        +342124567908,
                      </p>
                      <p className="text-white font-poppins text-[14px]">
                        +538935783453
                      </p>
                    </div>
                  </div>
                  <div className="gap-8 flex">
                    <p className="w-[100px] text-white font-poppins text-[14px]">
                      Write:
                    </p>
                    <p className="text-white font-poppins text-[14px]">
                      willscom@gamil.com
                    </p>
                  </div>
                  <div className="gap-8 flex">
                    <p className="w-[100px] text-white font-poppins text-[14px]">
                      Find us:
                    </p>
                    <p className="text-white font-poppins text-[14px]">
                      USA 22Th Brooklyn NY
                    </p>
                  </div>
                </div>
                <LinkText text="Get in Touch" />
              </div>
              <div className="w-full gap-4 flex flex-col">
                <Title text="Subscribe" />
                <Desc
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, mollitia, possimus id itaque reprehenderit neque
              praesentium aperiam earum doloribus ab ea harum vel dolore at
              totam. Ex rerum assumenda minima."
                />
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    className="focus:outline-none bg-bgcolor p-4 w-[300px] text-white"
                  />
                  <button className="h-full w-[80px] bg-secondary text-white font-semibold font-poppins">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[rgba(24,24,24)] flex justify-center items-center">
            <div className="w-[85%] flex justify-between items-center p-8">
              <div className="flex gap-1 text-white text-sm font-playfair">
                <Icon icon="tabler:no-copyright" width="24" height="24" />
                <p>RestResto 2022. All rights reserved.</p>
              </div>
              <a
                href="#landing"
                className="text-secondary text-sm font-playfair"
              >
                Back To Top
              </a>
            </div>
          </div>
        </ComponentContainer>
    </div>
  );
};

export default FooterSection;
