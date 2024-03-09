import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="p-large py-20 text-lg text-[#fffc]">
      <div className="flex flex-wrap items-start justify-start gap-20 max-lg:flex-col max-sm:gap-14">
        <div className="flex flex-col gap-10 max-sm:gap-6 lg:max-w-md">
          <a href="#">
            <img
              src="/src/assets/images/footer-logo.svg"
              alt="Footer Logo"
              width={150}
            />
          </a>
          <p>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex gap-5">
            {socialMedia.map((social) => {
              return (
                <div
                  key={social.alt}
                  className="flex cursor-pointer items-center justify-center rounded-full bg-white p-4 hover:bg-slate-300"
                >
                  <img
                    src={social.src}
                    alt={social.alt}
                    width={25}
                    height={25}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-start justify-between gap-20 max-sm:gap-10">
          {footerLinks.map((footer) => {
            return (
              <div key={footer.title} className="flex flex-col gap-5">
                <h4 className="text-3xl text-white">{footer.title}</h4>
                <ul className="flex flex-col gap-2">
                  {footer.links.map((link) => {
                    return (
                      <li
                        key={link.name}
                        className="cursor-pointer transition-all duration-300 hover:text-white hover:underline"
                      >
                        <a href={link.link}>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
