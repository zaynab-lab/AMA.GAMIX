import { styles } from "@/public/js/styles";
import Button from "@/components/atom/Button";
import { useState } from "react";
const products = [
  { name: "router one", img: "image", code: "1" },
  { name: "pink keyboard", img: "image", code: "2" },
  { name: "earphones", img: "image", code: "3" },
  { name: "printer", img: "image", code: "4" },
  { name: "black keyboard", img: "image", code: "5" },
  { name: "tp link", img: "image", code: "6" }
];
export default function Products() {
  const [items, setItems] = useState(3);
  return (
    <>
      <div className="productsComponent">
        <div className="productsComponentContent">
          <div className="title">Products</div>
          <div className="productsMainContainer">
            <div className="productsContainer">
              {products.slice(0, items).map((product, i) => (
                <div key={i} className="product">
                  <div className="productItem">
                    <div className="imgContainer">
                      <img
                        src={`/img/${product.img}.jpg`}
                        alt=""
                        width="100%"
                        height="150px"
                      />
                    </div>
                    {/* {product.name} */}
                    <div className="ButtonContainer">
                      <Button name="Order now" />
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
              Load More
            </div>
          ) : (
            <div
              className="loadMore"
              onClick={() => setItems((item) => item - 3)}
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
          grid-template-columns: 1fr 1fr 1fr;
          max-width: 100%;
          width: fit-content;
          gap: clamp(1rem, 3vw, 2rem);
          padding: 1.6rem 0rem;
          overflow: hidden;
        }
        .imgContainer {
          width: 10rem;
          overflow: hidden;
          border-radius: 0.8rem;
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
          padding: 1rem;
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
