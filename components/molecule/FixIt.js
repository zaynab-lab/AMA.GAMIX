import { styles } from "@/public/js/styles";

const issues = [
  { text: "WiFi issues", img: "wifi" },
  { text: "Hardware issues", img: "hardware" },
  { text: "Printer issues", img: "printer" }
];

export default function FixIt() {
  return (
    <>
      <div className="fixItSection">
        <h1 className="WeFixitItem">We fix it</h1>
        <div className="issuesContainer">
          {issues.map((issue, i) => (
            <div key={i} className="issue">
              <div className="imgContainer">
                <div className="imgBackground"></div>
                <div className="fixitImg">
                  <img
                    src={`/img/${issue.img}.png`}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
              </div>
              <div className="issueTxt">{issue.text}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .fixItSection {
          padding: calc(2rem + 6vw);
          ${styles.flexAligncenter}
          ${styles.flexColumn};
          gap: calc(2rem + 3vw);
        }
        .issuesContainer {
          width: 100%;
          max-width: 80rem;
          ${styles.flexAligncenter}
          ${styles.spaceEvenly}
        }

        .WeFixitItem {
          text-align: center;
          font-size: clamp(2.6rem, 9vw, 5rem);
          color: ${styles.secondaryColor};
          font-weight: 900;
        }

        .issue {
          ${styles.flexAligncenter}
          ${styles.flexColumn}
          gap:1rem;
        }
        .issueTxt {
          text-align: center;
          padding: 0.2rem 0.4rem;
          font-size: clamp(1rem, 3vw, 2.2rem);
          color: #6f21d3;
          font-weight: 600;
        }

        .imgContainer {
          width: clamp(5rem, 20vw, 12rem);
          height: clamp(5rem, 20vw, 12rem);
          border-radius: 50%;
          position: relative;
        }
        .imgBackground {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          top: 0;
          transform: translate(-1.4vw, 0.2vw);
          background: ${styles.secondaryColor};
        }
        .fixitImg {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          top: 0;
          overflow: hidden;
          color: gray;
          ${styles.flexBothcenter};
        }
        .fixitImg img {
          position: absolute;
          top: 0;
        }
      `}</style>
    </>
  );
}
