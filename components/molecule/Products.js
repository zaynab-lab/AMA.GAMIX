import { styles } from "@/public/js/styles";
import Button from "@/components/atom/Button";
import { useState } from "react";
import dictionary from "@/public/js/dictionary";
import Link from "next/link";

const products = [
  { name: "Headset", img: "Headset", code: "1" },
  { name: "Keyboard", img: "Keyboard", code: "2" },
  { name: "Monitor", img: "Monitor", code: "3" },
  { name: "Mouse", img: "Mouse", code: "4" },
  { name: "Printer", img: "Printer", code: "5" },
  { name: "Wifi", img: "Wifi", code: "6" },
  { name: "Set", img: "Set", code: "7" },
  { name: "Alexa", img: "Alexa", code: "8" },
  { name: "Desk", img: "Desk", code: "9" }
];
export default function Products({ lang }) {
  const [items, setItems] = useState(3);
  return (
    <>
      <div className="productsComponent" id="Products">
        <div className="productsComponentContent">
          <div className="title">
            {lang === "En" ? dictionary.products.En : dictionary.products.Ar}
          </div>
          <div className="productsMainContainer">
            <div className="productsContainer">
              {products.slice(0, items).map((product, i) => (
                <div key={i} className="product">
                  <div className="productItem">
                    <div className="imgContainer">
                      <img
                        src={`/img/products/${product.img}.png`}
                        alt=""
                        width="100%"
                        height="150px"
                      />
                    </div>
                    {/* {product.name} */}
                    <div className="ButtonContainer">
                      <Link href="https://wa.me/+971505601624">
                        <Button
                          name={
                            lang === "En"
                              ? dictionary.order.En
                              : dictionary.order.Ar
                          }
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {items <= products.length ? (
            <div
              className="loadMore"
              onClick={() => setItems((item) => item + 3)}
            >
              {lang === "En" ? dictionary.load.En : dictionary.load.Ar}
            </div>
          ) : (
            <div
              className="loadMore"
              onClick={() => setItems((item) => item - 6)}
            >
              Show Less
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .productsComponent {
          ${styles.displayFlex};
          ${styles.flexJustifycenter};
          background: ${styles.primaryColor};
          padding: 1rem;
          padding-top: 3rem;
          transform: translateY(-3rem);
        }
        .productsComponentContent {
          max-width: 60rem;
          width: 100%;
        }
        .title {
          color: #bcf2ff;
          font-size: clamp(2rem, 6vw, 3rem);
          text-shadow: 2px 2px 12px #129dd2;
        }
        .productsMainContainer {
          ${styles.flexBothcenter}
        }

        .productsContainer {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            clamp(11rem, calc(14vw + 1rem), 13rem)
          );
          max-width: 100%;
          width: fit-content;
          gap: clamp(1rem, 3vw, 2rem);
          padding: 1.6rem 0rem;
        }
        .imgContainer {
          width: clamp(9rem, 12vw, 12rem);
          height: clamp(9rem, 12vw, 12rem);
          overflow: hidden;
          border-radius: 0.8rem;
          -webkit-box-shadow: 1px 1px 5px 2px ${styles.thirdColor};
          box-shadow: 1px 1px 5px 2px ${styles.thirdColor};
        }
        .product {
          padding: 0.3rem;
          border-radius: 1rem;
          background: linear-gradient(180deg, #169cd5 0%, #be21d3 100%);
          -webkit-box-shadow: 1px 1px 12px 6px ${styles.thirdColor};
          box-shadow: 1px 1px 16px 10px ${styles.thirdColor};
        }
        .productItem {
          ${styles.flexAligncenter};
          ${styles.flexColumn};
          gap: 1rem;
          background: white;
          cursor: pointer;
          border-radius: 0.8rem;
          padding: 0.6rem;
        }
        .loadMore {
          color: white;
          width: 100%;
          font-size: clamp(1.6rem, 3vw, 2rem);
          text-shadow: 1px 2px 3px #666;
          cursor: pointer;
          text-align: center;
        }
      `}</style>
    </>
  );
}
