import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

export const socialData = [

  {
    name: "Instagram",
    link: "https://www.instagram.com/abdullahbilal43/",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100039350269883",
    Icon: RiFacebookLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/abdullah-bilal-083a32247/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/abdullahbilal43",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
            } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
