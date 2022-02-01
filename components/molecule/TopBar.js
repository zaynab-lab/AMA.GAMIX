import { styles } from "@/public/js/styles";
import dictionary from "@/public/js/dictionary";

export default function TopBar({ lang, setLang }) {
  return (
    <>
      <div className="topBarContainer">
        <div className="barContainer">
          <div className="menuContainer">
            <a href="#Products">
              <div className="menuItem">
                {lang === "En"
                  ? dictionary.products.En
                  : dictionary.products.Ar}
              </div>
            </a>
            <a href="#Services">
              <div className="menuItem">
                {lang === "En"
                  ? dictionary.services.En
                  : dictionary.services.Ar}
              </div>
            </a>
          </div>
          <div
            className="switch"
            onClick={() => setLang((lng) => (lng === "En" ? "Ar" : "En"))}
          >
            <div className="lang">{lang === "En" ? "Ar" : "En"}</div>
            <div className="switchCircle"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .topBarContainer {
          ${styles.flexJustifycenter}
        }
        .menuContainer {
          ${styles.flexAligncenter}
          gap: 1.2rem;
          font-size: clamp(1.1rem, 3vw, 1.8rem);
        }
        .barContainer {
          flex: 1 1;
          color: white;
          ${styles.flexAligncenter};
          ${styles.justifyBetween};
          gap: 2rem;
          padding: clamp(1.2rem, 4vw, 3rem);
          max-width: 60rem;
        }
        .switch {
          background: white;
          color: black;
          padding: 0.2rem;
          border-radius: 4rem;
          ${styles.flexAligncenter};
          ${lang === "En"
            ? ""
            : "-webkit-box-orient: horizontal;-webkit-box-direction: reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse;"}
          gap: 0.6rem;
          cursor: pointer;
          ${styles.userSelect}
        }
        .switchCircle {
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 5rem;
          background: ${styles.primaryColor};
        }
        .lang {
          padding-left: 0.6rem;
        }
        .menuItem {
          cursor: pointer;
          padding: 0rem 0.8rem;
          border-radius: 0.3rem;
          padding-top: 0.1rem;
          color: white;
        }
        .menuItem:hover {
          color: ${styles.primaryColor};
          background: white;
        }
      `}</style>
    </>
  );
}
