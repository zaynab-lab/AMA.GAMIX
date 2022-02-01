import { styles } from "@/public/js/styles";
import Insta from "@/public/img/Insta";

export default function Follow() {
  return (
    <>
      <div>
        <div className="followSction">
          <div className="followContainer">
            <div className="text">
              <div className="textFU"> Follow us</div>
              <div className="textAMA"> ama.gamix</div>
            </div>
            <div className="FaInstagramItem">
              <Insta />
            </div>
          </div>
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
          text-align: left;
          background: -webkit-linear-gradient(90deg, #9e0fd5, #be21d3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .textAMA {
          font-size: clamp(1.6rem, 3vw, 4rem);
          text-align: left;
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
