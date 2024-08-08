import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Row from "./common/Row";

const ProductCard = ({ data }) => {
  return (
    <Link className="w-full shadow" to={`/product/${data._id}`}>
      <img
        src={data.img}
        alt={data.title}
        className="w-full h-[400px] object-cover"
      />
      <Row className="px-[10px] pt-[10px]">
        <h6 className="text-black text-[16px] font-semibold mb-[18px]">
          {data.title}
        </h6>
      </Row>
      <Row className="justify-between  px-[10px] pb-[15px] mb-[10px]">
        <p className="text-[16px] text-[#00000080]">{data.category.title}</p>
        <p className="text-[16px] text-[#00000080] font-semibold">
          {data.price}
        </p>
      </Row>
    </Link>
  );
};

export default ProductCard;
