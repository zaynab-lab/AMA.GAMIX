import { styles } from "@/public/js/styles";

export default function Button({ name }) {
  return (
    <>
      <div>
        <div className="buttonItem">{name}</div>
      </div>
      <style jsx>{`
        .buttonItem {
          ${styles.flexBothcenter};
          background: #3498db;
          border-radius: 0.4rem;
          color: #ffffff;
          font-size: 1.2rem;
          text-decoration: none;
          width: 100%;
          padding: 0.3rem 1.6rem;
          cursor: pointer;
        }
        .buttonItem:hover {
          background: #3498dbe0;
        }
      `}</style>
    </>
  );
}
