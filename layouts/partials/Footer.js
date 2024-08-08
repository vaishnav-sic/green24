import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-dark pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(col.name, "h4", "text-white")}
                <ul className="mt-6 text-white">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6 bg-cover" style={{ display: "flex", justifyContent: "center", alignItems: "center", background:"#8fc745", color:"black" }}>
          {/* {markdownify(copyright, "p", "text-sm text-center")} */}
          <p className="site-footer__copy" style={{ display: "flex", alignItems: "center", margin: "0" }}>
            &copy; सर्वहक्कस्वाधीन २०२४ &nbsp;&nbsp;{" "}
              <a href="https://www.swasamvedya.com/" target="_blank">
                <img src="/images/SIC_LogoName.svg" alt="Logo"  style={{height:"50px", width:"200px"}}/>
              </ a>
              &nbsp;&nbsp; द्वारे ❤ प्रेमपूर्वक विकसित  
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;