import { FaWhatsapp } from "react-icons/fa";
import { styles } from "@/public/js/styles";

export default function Button() {
  return (
    <>
      <div>
        <div className="buttonItem">
          <div className="btnicon">
            <FaWhatsapp />
          </div>
          <div className="btntext">
            <div>Save our WhatsApp </div>
            <div>+971 505 60 1624</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .buttonItem {
          ${styles.flexAligncenter}
          width: 100%;
          cursor: pointer;
          color: white;
          border-radius: 30rem;
          gap: 1.6rem;
          box-shadow: 0px 0px 5px 5px ${styles.secondaryColor};
          padding: 0.6rem 1.6rem;
        }
        .btnicon {
          font-size: clamp(3rem, 3vw, 4rem);
          line-height: 0rem;
          color: ${styles.secondaryColor};
        }
        .btntext {
          ${styles.flexAligncenter};
          ${styles.flexColumn};
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
