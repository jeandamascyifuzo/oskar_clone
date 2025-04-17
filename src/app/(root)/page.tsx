import ExploreProduct from "@/components/landingPage/ExploreProduct";
import TrustedCompany from "@/components/landingPage/TrustedBy";
import WelcomePage from "@/components/landingPage/WelcomePage";

export default function Home() {
  return (
    <div className="bg-white font-[family-name:var(--font-geist-sans)]">
      <div className="max-w-[1250px] mx-auto px-10">
        <WelcomePage />
        <TrustedCompany />
        <ExploreProduct />
      </div>
    </div>
  );
}
