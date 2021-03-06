import { styles } from "@/public/js/styles";
import Insta from "@/public/js/Insta";
import dictionary from "@/public/js/dictionary";

export default function Follow({ lang }) {
  return (
    <>
      <div>
        <div className="followSction">
          <a href="instagram://user?username=ama.gamix">
            <div className="followContainer">
              <div className="text">
                <div className="textFU">
                  {lang === "En" ? dictionary.follow.En : dictionary.follow.Ar}
                </div>
                <div className="textAMA">ama.gamix</div>
              </div>
              <div className="FaInstagramItem">
                <Insta />
              </div>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .followSction {
          padding-bottom: 3rem;
          ${styles.flexJustifycenter};
        }
        .followContainer {
          ${styles.flexAligncenter}
          ${styles.spaceEvenly};
          width: 100%;
          max-width: 60rem;
          padding: 0rem 1rem;
        }
        .text {
          flex: 1 1 75%;
        }
        .textFU {
          font-size: clamp(2.2rem, 5vw, 5rem);
          font-weight: 900;
          background: -webkit-linear-gradient(90deg, #9e0fd5, #be21d3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .textAMA {
          font-size: clamp(1.6rem, 3vw, 4rem);
          color: #6f21d3;
        }
        .FaInstagramItem {
          flex: 1 1 25%;
          font-size: clamp(6rem, 12vw, 12rem);
          line-height: 0rem;
          // background: linear-gradient(180deg, #b646de 0%, #6f21d3 100%);
        }
      `}</style>
    </>
  );
}
