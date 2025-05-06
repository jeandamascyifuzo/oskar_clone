import ExploreOkraDoc from "@/components/landingPage/ExploreOkraDoc";
import ExploreProduct from "@/components/landingPage/ExploreProduct";
import HowOkraPower from "@/components/landingPage/HowOkraPower";
import OkraCoverage from "@/components/landingPage/OkraCoverage";
import TrustedCompany from "@/components/landingPage/TrustedBy";
import WelcomePage from "@/components/landingPage/WelcomePage";

export default function Home() {
  return (
    <>
      <div className="bg-white font-[family-name:var(--font-geist-sans)] pb-16">
        <div className="max-w-[1250px] mx-auto px-10">
          <WelcomePage />
          <TrustedCompany />
          <ExploreProduct />
        </div>
      </div>
      <div className="bg-[#f4f6f8] font-[family-name:var(--font-geist-sans)] py-20 text-gray-900">
        <div className="max-w-[1250px] mx-auto px-10">
          <HowOkraPower />
        </div>
      </div>
      <div className="bg-[#222c3b] font-[family-name:var(--font-geist-sans)] py-20 text-white">
        <div className="max-w-[1250px] mx-auto px-10">
          <ExploreOkraDoc />
        </div>
      </div>
      <div className="bg-[#f4f6f8] font-[family-name:var(--font-geist-sans)] text-gray-900">
        <div className="max-w-[1250px] mx-auto px-10">
          <OkraCoverage />
        </div>
      </div>
    </>
  );
}
