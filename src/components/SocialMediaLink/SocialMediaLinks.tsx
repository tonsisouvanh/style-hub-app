import React from "react";
import { FaTiktok, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const socialMediaData = [
  {
    platform: "TikTok",
    link: "https://www.tiktok.com/@cyberpunk996",
    color: "hover:bg-[#010101]",
    icon: <FaTiktok className="h-6 w-6" />,
  },
  {
    platform: "WhatsApp",
    link: "https://wa.me/8562056300100",
    color: "hover:bg-[#25d366]",
    icon: <FaWhatsapp className="h-6 w-6" />,
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/cyberpunk_996/",
    color: "hover:bg-[#c32aa3]",
    icon: <FaInstagram className="h-6 w-6" />,
  },
  {
    platform: "Facebook Page",
    link: "https://www.facebook.com/profile.php?id=100092578272391",
    color: "hover:bg-[#3b5998]",
    icon: <FaFacebook className="h-6 w-6" />,
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      {socialMediaData.map((media) => (
        <a
          key={media.platform}
          href={media.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${media.color} rounded-full bg-gray-700 fill-current p-3 text-white transition duration-300`}
        >
          {media.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
