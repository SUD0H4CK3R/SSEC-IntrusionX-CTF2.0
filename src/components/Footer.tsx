import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const staffCoordinators = [
    { 
      name: "Ms.R Mohana Santhiya - AP/DET", 
      email: "santhiyaravip@gmail.com",
      phone: "+91 99943 69306" // Added phone number
    },
  ];

  const studentCoordinators = {
    "3rd year Cyber wing": [
      "Aruvasaga Chithan A",
      "Jeevanandh D",
      "Bharath T",
      "Thejesh R",
    ],
    "2nd year Cyber wing": [
      [
        "Kumaresan ",
        "Dinesh Kannan",
        "Samuel Britto",
        "Naga Yogesh"
      ],
      [
        "Mukesh",
        "Tharun Kumar",
        "GokulKrishnan",
        "ManojKumar"
      ]
    ],
  };

  const contactInfo = [
    { icon: Mail, text: "emtrondet@gmail.com", href: "emtrondet@gmail.com" },
    { icon: Phone, text: "+91 6381206466 +91 8015602264 +91 9087737675", href: "tel:+916381206466  +91 8015602264 +91 9087737675" },
    { icon: MapPin, text: "CC Labs, SSEC Campus", href: "#" },
  ];

  return (
    <footer className="bg-card text-foreground border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Staff Coordinators */}
          <div>
            <h3 className="font-semibold text-primary mb-4 text-lg">Staff Coordinators</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {staffCoordinators.map((staff, index) => (
                <li key={index}>
                  <p>{staff.name}</p>
                  <a href={`mailto:${staff.email}`} className="hover:text-primary transition-colors duration-300">
                    Email: {staff.email}
                  </a>
                  <p className="whitespace-nowrap">
                    Phone: {staff.phone}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Coordinators */}
          <div>
            <h3 className="font-semibold text-primary mb-4 text-lg">Student Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.keys(studentCoordinators).map((year, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-accent mb-2">{year}</h4>
                  {Array.isArray(studentCoordinators[year][0]) ? (
                    <div className="grid grid-cols-2 gap-x-4 text-sm text-muted-foreground">
                      {studentCoordinators[year].map((column, colIndex) => (
                        <ul key={colIndex} className="space-y-2">
                          {column.map((name, nameIndex) => (
                            <li key={nameIndex} className="whitespace-nowrap">{name}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {studentCoordinators[year].map((name, nameIndex) => (
                        <li key={nameIndex} className="whitespace-nowrap">{name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={contact.href !== "#" ? contact.href : undefined}
                    className={`text-sm text-muted-foreground ${contact.href !== "#" ? "hover:text-primary transition-colors duration-300" : ""}`}
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 SSEC CTF. Powered by Department of Emerging Technologies.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;