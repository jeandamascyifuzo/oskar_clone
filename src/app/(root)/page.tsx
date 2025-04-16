import TrustedCompany from "@/components/landingPage/TrustedBy";
import WelcomePage from "@/components/landingPage/WelcomePage";

export default function Home() {
  return (
    <div className="bg-white font-[family-name:var(--font-geist-sans)]">
      <WelcomePage />
      <TrustedCompany />
    </div>
  );
}
