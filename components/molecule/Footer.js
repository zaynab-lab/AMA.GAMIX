import Logo from "@/public/js/Logo";
import { styles } from "@/public/js/styles";
import Link from "next/link";
import WaButton from "@/components/atom/WaButton";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Link href="https://wa.me/+971505601624">
          <div className="WaButton">
            <WaButton />
          </div>
        </Link>
        <div className="footerlogo">
          <Logo />
        </div>
      </div>
      <style jsx>{`
        .footer {
          ${styles.flexColumn};
          ${styles.flexAligncenter};
          background: ${styles.primaryColor};
          color: white;
          padding: 4vw;
          font-size: 4vw;
        }
        .footerlogo {
          max-width: 30%;
          padding-top: 3vw;
        }
      `}</style>
    </>
  );
}