export default function Button({ name }) {
  return (
    <>
      <div>
        <div className="buttonItem">
          <div className="btnName">{name}</div>
        </div>
      </div>
      <style jsx>{`
        .buttonItem {
          display: flex;
          background: #3498db;
          -webkit-border-radius: 0.4rem;
          -moz-border-radius: 0.4rem;
          border-radius: 0.4rem;
          color: #ffffff;
          font-size: 15px;
          padding: 10px 15px 10px 15px;
          text-decoration: none;
          width: 100%;
          height: 25%;
          text-align: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
