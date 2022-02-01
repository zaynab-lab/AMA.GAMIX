import { FaWhatsapp } from "react-icons/fa";
import { styles } from "@/public/js/styles";
import dictionary from "@/public/js/dictionary";

export default function Button({ lang }) {
  return (
    <>
      <div>
        <div className="buttonItem">
          <div className="btnicon">
            <FaWhatsapp />
          </div>
          <div className="btntext">
            <div>{lang === "En" ? dictionary.save.En : dictionary.save.Ar}</div>
            <div>
              {lang === "En" ? dictionary.number.En : dictionary.number.Ar}
            </div>
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
          box-shadow: 0px 0px 5px 3px ${styles.secondaryColor};
          -webkit-box-shadow: 0px 0px 5px 3px ${styles.secondaryColor};
          -webkit-transition: all 0.6s ease-in-out;
          -o-transition: all 0.6s ease-in-out;
          transition: all 0.6s ease-in-out;
          padding: 0.6rem 1.6rem;
        }
        .buttonItem:hover {
          box-shadow: 0px 0px 8px 5px ${styles.secondaryColor};
          -webkit-box-shadow: 0px 0px 8px 5px ${styles.secondaryColor};
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
