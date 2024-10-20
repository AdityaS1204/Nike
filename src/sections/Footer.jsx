import { twitter,facebook,instagram, copyrightSign } from "../assets/icons";
import { footerLinks, socialMedia } from "../constants/index";
import { footerLogo } from "../assets/images";
const Footer = () => {
  return (
   <footer className="max-container">
    <div className="flex justify-between flex-wrap items-start gap-20 max-lg:flex-col 
    ">
      <div className="flex flex-col items-start">
        <a href="">
          <img src={footerLogo} 
          width={150}
          height={46} />
        </a>
        <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the nearest store right now</p>
        <div className="flex mt-8 gap-5 items-center">
          {socialMedia.map((icon)=>(
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={icon.src}
               alt={icon.alt}
               width={24}
               height={24}
                />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((section)=>(
          <div key={section}>
            <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">{section.title}</h4>
            <ul className="text-white">
              {section.links.map((link)=>(
                <li className="mt-3 text-white-400 leading-normal text-base font-montserrat hover:text-coral-red cursor-pointer"
                key={link.name}>
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
      <div className="flex flex-1 cursor-pointer font-montserrat items-center gap-2 justify-center">
<img 
src={copyrightSign}
 alt="cpoyright"
 height={20}
 width={20}
 className="rounded-full m-0" />
 <p>Copyright. All rights reserved.</p>
      </div>
      <p className="font-montserrat cursor-pointer text-center">Terms & conditions</p>
    </div>
   </footer>
  )
}

export default Footer;