import { styles } from "@/public/js/styles";
import Logo from "@/public/js/Logo";
import TopBar from "./TopBar";
import WaButton from "@/components/atom/WaButton";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className="introContainer">
        <TopBar />
        <div className="logoContainer">
          <div className="logo">
            <Logo />
          </div>
        </div>
        <div className="textGroup">
          <div className="textTP">You Have Technical Problems !!!</div>
          <div className="textTH">We are here to help</div>
          <Link href="https://wa.me/+971505601624">
            <div className="WaButton">
              <WaButton />
            </div>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .introContainer {
          background: ${styles.primaryColor};
          min-height: 100vh;
          padding-bottom: 2rem;
        }
        .logoContainer {
          ${styles.flexJustifycenter}
        }
        .logo {
          padding: 12vh 0rem;
          min-width: 15rem;
          width: 30vw;
          max-width: 50%;
        }
        .textTP {
          font-size: clamp(1.3rem, 5vw, 3.6rem);
          font-weight: 900;
          color: ${styles.secondaryColor};
          text-align: center;
        }
        .textTH {
          font-size: clamp(1.2rem, 2.6vw, 3rem);
          color: white;
          text-align: center;
          padding: 1rem;
        }
        .WaButton {
          ${styles.flexJustifycenter}
          width: 100%;
          gap: 3rem;
        }
        .textGroup {
          ${styles.flexAligncenter};
          ${styles.flexColumn};
          gap: 2vh;
        }
      `}</style>
    </>
  );
}
