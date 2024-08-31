"use client";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import { FaCog } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import ProfieCard from "@/components/ProfileCard";


interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const navigation = [
    { label: "DashBoard", href: "/" },
    { label: "Catagory", href: "/catagory" },
    { label: "Sub Catagory", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Customers", href: "/customers" },
    { label: "Credits", href: "/credit" },
  ];

  return (
    <div className="flex h-screen flex-col">
      {/* App Bar */}
      <header className="bg-black text-white">
        <div className="flex justify-between items-center p-4">
          <p className="text-2xl font-bold">crmgo</p>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
             <ProfieCard />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav className="bg-gray-100 w-64 p-4">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => router.push(item.href)}
                  className={` w-full text-left p-2 rounded hover:bg-gray-300 flex items-center justify-between ${
                    usePathname() === item.href ? "bg-gray-300" : ""
                  }`}
                >
                  {item.label}
                  <div>
                    <FaArrowRight />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-8 bg-white overflow-y-scroll ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
