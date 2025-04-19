// components/Footer.jsx
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [hovered, setHovered] = useState([]);

  const handleMouseEnter = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = true;
    setHovered(newHovered);
  };

  const handleMouseLeave = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = false;
    setHovered(newHovered);
  };

  // Navigation categories data
  const navCategories = [
    { name: "ยอดนิยม", isActive: true },
    { name: "ศิลปะและวัฒนธรรม", isActive: false },
    { name: "กิจกรรมกลางแจ้ง", isActive: false },
    { name: "ภูเขา", isActive: false },
    { name: "ชายหาด", isActive: false },
    { name: "ประเภท", isActive: false },
    { name: "กิจกรรมน้ำตก", isActive: false },
  ];

  // Destination categories data
  const destinations = [
    { title: "แคมเมอร์", description: "ที่พักที่น่าพักเหมาะสำหรับสัตว์" },
    { title: "เบลีมาเขตา", description: "อาคารบนแพที่เช่า" },
    { title: "ม่าซังดาล่า", description: "บ้านที่เช่า" },
    { title: "มิวลาจ", description: "อาคารแบบที่เช่า" },
    { title: "เทวาสตอดร์", description: "เตโบที่เช่า" },
    { title: "สกอตต์แลด", description: "อาคารแบบที่เช่า" },
    { title: "ทูกอน", description: "ที่พักที่น่าพักพร้อมสระว่ายน้ำ" },
    { title: "แสลเมอร์", description: "เตโบที่เช่า" },
    { title: "นาเต็กไข่พ่วง", description: "เตโบที่เช่า" },
    { title: "Devonport", description: "คอทเทจที่เช่า" },
    { title: "Mallacota", description: "ที่พักที่น่าพักที่เหมาะสำหรับสัตว์" },
    { title: "ซีบีชา", description: "บ้านพักตากอากาศ" },
    { title: "อมาโดม", description: "คอนโดที่เช่า" },
    { title: "มอนเตอร์เรย์", description: "บังกะโลที่เช่า" },
    { title: "ปาล์มงแดเล็ส", description: "คอททาจที่เช่า" },
    {
      title: "ซาน่าคลาร์มาร่า",
      description: "ที่พักที่น่าพักที่เหมาะสำหรับสัตว์",
    },
    { title: "โชโนมา", description: "บ้านเต็นท์" },
  ];

  // Footer links data
  const footerSections = [
    {
      title: "การสนับสนุน",
      links: [
        "ศูนย์ช่วยเหลือ",
        "AirCover",
        "ไม่เลือกปฏิบัติ",
        "ช่วยผู้มีความบกพร่อง",
        "ตัวเลือกสำหรับการยกเลิกการจอง",
        "รายงานปัญหาบ้านที่พัก",
      ],
    },
    {
      title: "การให้เช่าที่พัก",
      links: [
        "เปิด Airbnb ที่พักกัน",
        "AirCover สำหรับโฮสต์",
        "แหล่งข้อมูลโฮสต์",
        "ฟอรั่มชุมชน",
        "ให้เช่าอย่างรับผิดชอบ",
        "เข้าร่วมตลาดการให้เช่าที่พักฟรี",
        "ค้นหาผู้ช่วยเจ้าของที่พัก",
      ],
    },
    {
      title: "Airbnb",
      links: [
        "ห้องข่าว",
        "ฟีเจอร์ใหม่",
        "อาชีพ",
        "นักลงทุน",
        "บัตรของขวัญ",
        "ที่พัก Airbnb.org",
      ],
    },
  ];

  // Social links
  const socialLinks = [
    { icon: <FaFacebookF size={32} />, label: "Facebook" },
    { icon: <FaTwitter size={32} />, label: "Twitter" },
    { icon: <FaInstagram size={32} />, label: "Instagram" },
  ];

  return (
    <>
      {/* Main Footer Navigation */}
      <div className="w-full p-8">
        <div className="text-5xl font-medium mb-8">
          แรงบันดาลใจสำหรับการพักผ่อนในอนาคต
        </div>

        {/* Navigation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 border-b border-gray-200 pb-8">
          {navCategories.map((category, index) => (
            <button
              key={index}
              className={`${
                category.isActive
                  ? "text-gray-800 border-b-2 border-gray-800"
                  : "text-gray-500 hover:text-gray-800 hover:border-b-2 hover:border-gray-800"
              } 
                pb-3 md:pb-4 text-4xl font-medium text-left`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Destination Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 py-8">
          {destinations.map((destination, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onMouseEnter={() => {
                handleMouseEnter(index);
                console.log("Hovered");
              }}
              onMouseLeave={() => {
                handleMouseLeave(index);
                console.log("Unhovered");
              }}
            >
              <h3 className="font-medium text-4xl mb-4">{destination.title}</h3>
              <p
                className={`${
                  hovered[index] ? "text-black" : "text-gray-500"
                } text-4xl`}
              >
                {destination.description}
              </p>
            </div>
          ))}
          <div className="flex items-center">
            <button className="text-gray-800 text-4xl font-medium flex items-center">
              แสดงมากขึ้น
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-gray-200">
          {footerSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col justify-between items-center"
            >
              <h3 className="font-medium text-4xl mb-6">{section.title}</h3>
              <ul className="space-y-4 flex flex-col items-center">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-4xl text-gray-500 hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 pb-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center mb-6 md:mb-0 text-4xl text-gray-500">
            <div>© 2025 Airbnb, Inc.</div>
            <div className="hidden md:flex md:items-center">
              {["ความเป็นส่วนตัว", "เงื่อนไข", "แผนผังเว็บไซต์"].map(
                (item, index) => (
                  <React.Fragment key={index}>
                    <span className="mx-2">·</span>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </React.Fragment>
                )
              )}
            </div>
          </div>

          <div className="flex items-center">
            <button className="flex items-center mr-6 text-4xl font-medium">
              <FaGlobe className="mr-2" size={32} />
              ไทย
            </button>
            <button className="mr-6 text-4xl font-medium">฿ THB</button>

            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href="#"
                className={index < socialLinks.length - 1 ? "mr-4" : ""}
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
