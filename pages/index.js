import Intro from "@/components/molecule/Intro";
import FixIt from "@/components/molecule/FixIt";
import Setup from "@/components/molecule/Setup";
import Products from "@/components/molecule/Products";
import Follow from "@/components/molecule/Follow";
import Services from "@/components/molecule/Services";
import Footer from "@/components/molecule/Footer";
import { useState } from "react";

export default function Index() {
  const [lang, setLang] = useState("En");

  return (
    <>
      <Intro lang={lang} setLang={setLang} />
      <FixIt lang={lang} />
      <Setup lang={lang} />
      <Products lang={lang} />
      <Follow lang={lang} />
      <Services lang={lang} />
      <Footer />

      <style global jsx>{`
        * {
          ${lang === "Ar" && "direction:rtl"}
        }
      `}</style>
    </>
  );
}
