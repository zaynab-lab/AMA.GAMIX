import Logo from "@/public/js/Logo";
import { styles } from "@/public/js/styles";
import Link from "next/link";
import WaButton from "@/components/atom/WaButton";

export default function Footer({ lang }) {
  return (
    <>
      <div className="footer">
        <Link href="https://wa.me/+971505601624">
          <div className="footerWabtn">
            <WaButton lang={lang} />
          </div>
        </Link>
        <div className="mail">
          <a className="mail" href="mailto: admin@amagamix-store.com">
            admin@amagamix-store.com
          </a>
        </div>
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
        .footerWabtn {
          padding: 2rem;
        }
        .footerlogo {
          max-width: 30%;
          padding-top: 3vw;
        }
        .mail {
          color: ${styles.secondaryColor};
        }
      `}</style>
    </>
  );
}
