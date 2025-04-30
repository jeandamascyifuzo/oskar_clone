import { TbPoint } from "react-icons/tb";
import { CgEditBlackPoint } from "react-icons/cg";

const Tabs = ({ tabs, activeIndex, handleTabChange }: TabsProps) => {
  return (
    <div className="md:flex">
      <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-600 md:me-4 mb-4 md:mb-0">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={index}>
              <button
                type="button"
                className="inline-flex items-center px-4 rounded-lg w-full text-lg"
                onClick={() => handleTabChange(index)}
              >
                <div className="mr-2.5 w-5 h-5 relative">
                  <div
                    className={`absolute transition-opacity duration-900 ease-in-out ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <CgEditBlackPoint color="#009e74" size={20} />
                  </div>
                  <div
                    className={`absolute transition-opacity duration-800 ease-in-out ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <TbPoint size={20} />
                  </div>
                </div>
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* <div className="flex-1 w-full text-gray-600 mr-20">
        <div className="p-6 bg-[#f4f6f8] text-medium rounded-lg w-full">
          {tabs[activeIndex]?.content}
        </div>{" "}
      </div> */}
    </div>
  );
};

export default Tabs;
