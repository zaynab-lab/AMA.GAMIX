import Intro from "@/components/molecule/Intro";
import FixIt from "@/components/molecule/FixIt";
import Setup from "@/components/molecule/Setup";
import Products from "@/components/molecule/Products";
import Follow from "@/components/molecule/Follow";
import Services from "@/components/molecule/Services";
import Footer from "@/components/molecule/Footer";

export default function Index() {
  return (
    <>
      <Intro />
      <FixIt />
      <Setup />
      <Products />
      <Follow />
      <Services />
      <Footer />
    </>
  );
}
