import dictionary from "@/public/js/dictionary";
import { styles } from "@/public/js/styles";

const services = [
  {
    text: {
      En: "PC repairing & maintinance",
      Ar: "الدعم الفني والصيانة لأجهزة الحاسوب"
    }
  },
  {
    text: {
      En: "Home network (WIFI, Printer...)",
      Ar: "شبكات المنازل (واي فاي، طابعة،...)"
    }
  },
  { text: { En: "Laptop Fixing", Ar: "صيانة اللابتوب" } },
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
  },
  {
    text: {
      En: "App, web, and system development",
      Ar: "تطوير تطبيقات ومواقع وأنظمة"
    }
  },
  {
    text: {
      En: "Design and visual identity",
      Ar: "تصميم وهوية بصرية"
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
          width: 100%;
          max-width: 60rem;
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
