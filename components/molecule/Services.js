import dictionary from "@/public/js/dictionary";
import { styles } from "@/public/js/styles";

const services = [
  {
    text: { En: "PC repairing & maintinance", Ar: "اصلاح وصيانة الكمبيوترات" }
  },
  {
    text: {
      En: "Home network(WIFI, Printer...)",
      Ar: "شبكات المنازل (واي فاي، طابعة،...)"
    }
  },
  { text: { En: "Laptop Fixing", Ar: "تصليح لابتوبات" } },
  {
    text: {
      En: "Upgrade and Update (Hardware & software)",
      Ar: "تحديث و ترقية (الأجهزة والبرامج)"
    }
  },
  {
    text: {
      En: "Providing various computer accessories",
      Ar: "توفير ملحقات الكمبيوتر المختلفة"
    }
  }
];

export default function Services({ lang }) {
  return (
    <>
      <div className="servicesComponent" id="Services">
        <div className="servicesContent">
          {lang === "En" ? dictionary.services.En : dictionary.services.Ar}

          <div className="servicesContainer">
            {services.map((service, i) => (
              <div key={i} className="service">
                - {service.text[lang]}
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
