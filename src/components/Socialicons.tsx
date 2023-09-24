import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
function Socialicons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/THARMATT" },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://youtube.com/@nigam_sharma",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/nigam-sharma",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/nigamsharma_",
    },
  ];
  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link href={link} className="social-icons-list-item-link" target="_blank">
{icon}

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Socialicons;
