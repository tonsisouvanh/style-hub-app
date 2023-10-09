import { MdSell } from "react-icons/md";
import { Product } from "../../../../types";

type Props = {
  products: Product[];
};

const State = ({ products }: Props) => {
  const readytosell = products.reduce((acc, product) => {
    if (product.stock > 0) {
      acc++;
    }
    return acc;
  }, 0);
  const sale = products.reduce((acc, product) => {
    if (product?.discount?.value !== 0 && product?.discount?.value) {
      acc++;
    }
    return acc;
  }, 0);
  const lowOnStock = products.reduce((acc, product) => {
    if (product?.stock <= 2) {
      acc++;
    }
    return acc;
  }, 0);
  const outOfStock = products.reduce((acc, product) => {
    if (product?.stock === 0) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className="stats w-full rounded-md font-notosanslao text-lg font-bold shadow-md">
      <div className="stat">
        <div className="stat-figure text-primary">
          <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ພ້ອມຂາຍ</div>
        <div className="stat-value">{readytosell}</div>
        <div className="stat-desc"></div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ມີສ່ວນລົດ</div>
        <div className="stat-value">{sale}</div>
        <div className="stat-desc"></div>
      </div>

      <div className="stat">
        <div className="stat-figure text-accent">
          <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ໃກ້ໝົດ</div>
        <div className="stat-value">{lowOnStock}</div>
        <div className="stat-desc"></div>
      </div>
      <div className="stat">
        <div className="stat-figure text-neutral">
          <MdSell size={48} className="" />
        </div>
        <div className="stat-title">ໝົດ</div>
        <div className="stat-value">{outOfStock}</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
};

export default State;
