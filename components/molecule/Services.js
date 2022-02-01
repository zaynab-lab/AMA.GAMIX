import { styles } from "@/public/js/styles";

const services = [
  { text: "PC repairing & maintinance" },
  { text: "Home network(WIFI, Printer...)" },
  { text: "Laptop Fixing" },
  { text: "Upgrade and Update (Hardware & software)" },
  { text: "Providing varioscomputer accessories" }
];

export default function Services() {
  return (
    <>
      <div className="servicesComponent">
        <div className="servicesContent">
          Services
          <div className="servicesContainer">
            {services.map((service, i) => (
              <div key={i} className="service">
                - {service.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .servicesComponent {
          ${styles.displayFlex};
          ${styles.flexJustifycenter};
          background: linear-gradient(45deg, #2d59b8, #cb15c9);
          color: white;
          padding: 3vw;
          font-size: clamp(2rem, 6vw, 3rem);
          color: #bcf2ff;
          text-shadow: 2px 2px 12px #129dd2;
        }
        .servicesContent {
          max-width: 70rem;
        }
        .servicesContainer {
          font-size: clamp(0.8rem, 4vw, 3rem);
          text-align: left;
          padding: 1rem;
          color: #bcf2ff;
          text-shadow: 2px 2px 12px #129dd2;
        }
        .service {
          padding: 0.3rem 0rem;
        }
      `}</style>
    </>
  );
}
