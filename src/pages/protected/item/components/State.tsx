import { MdSell } from "react-icons/md";

type Props = {};

const State = (props: Props) => {
  return (
    <div className="! stats rounded-md font-notosanslao shadow w-full text-lg font-bold">
      <div className="stat">
        <div className="stat-figure text-primary">
          <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ພ້ອມຂາຍ</div>
        <div className="stat-value">20</div>
        <div className="stat-desc"></div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ມີສ່ວນລົດ</div>
        <div className="stat-value">4</div>
        <div className="stat-desc"></div>
      </div>

      <div className="stat">
        <div className="stat-figure text-accent">
          <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ໃກ້ໝົດ</div>
        <div className="stat-value">200</div>
        <div className="stat-desc"></div>
      </div>
      <div className="stat">
        <div className="stat-figure text-neutral">
        <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ໝົດ</div>
        <div className="stat-value">200</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
};

export default State;
