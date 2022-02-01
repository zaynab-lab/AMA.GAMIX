import { styles } from "@/public/js/styles";

export default function Setup() {
  return (
    <>
      <div>
        <div className="setupSection">
          <div className="setupContainer">
            <div className="text">
              <div className="textSU">We Setup the best space for you</div>
              <div className="textWG">Work & Gaming</div>
            </div>
            <div className="imgContainer">
              <div className="imgItem">
                <img src={`/img/set.png`} alt="" height="300rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .setupSection {
          padding: 1rem;
          padding-top: 2vw;
          ${styles.flexJustifycenter};
          position: relative;
        }
        .setupContainer {
          ${styles.displayFlex}
          ${styles.justifyBetween};
          max-width: 80rem;
          gap: clamp(1.2rem, 6vw, 3.8rem);
        }
        .text {
          flex: 1 1 30%;
          ${styles.displayFlex};
          ${styles.flexColumn};
          gap: min(3vw, 4rem);
          flex-wrap: wrap;
          max-width: 26rem;
        }
        .textSU {
          font-size: clamp(1.2rem, 6vw, 3.8rem);
          font-weight: 900;
          color: ${styles.secondaryColor};
          text-align: right;
          background: -webkit-linear-gradient(#980fd6, #cb15c9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .textWG {
          font-size: clamp(0.8rem, 3vw, 2.8rem);
          text-align: right;
          color: #af16ba;
        }
        .imgContainer {
          flex: 1 1 65vw;
          ${styles.flexAligncenter};
          border-radius: 0 1.5rem 1.5rem 0;
          background: ${styles.secondaryColor};
          height: 65vw;
          max-width: 35rem;
          max-height: 35rem;
          overflow: hidden;
          z-index: 3;
          -webkit-box-shadow: 1px 1px 16px 10px ${styles.thirdColor};
          box-shadow: 1px 1px 12px 6px ${styles.thirdColor};
          border: 1px solid white;
        }
        .imgItem {
          width: 100%;
          height: 100%;
          border-radius: 0 1.5rem 1.5rem 0;
        }
        .imgItem img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}
