import AddCartAction from "../AddCartAction/AddCartAction";
import sample from "../../assets/images/sample.jpg";
import hover from "../../assets/images/hover.jpg";
import watch from "../../assets/images/watch_cate.jpeg";
import { Link } from "react-router-dom";

interface ProductProps {
  products: Product[];
  featuredTitle: string;
  featuredDesc: string;
  showButton: boolean;
}

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const FeaturedProducts: React.FC<ProductProps> = ({
  products,
  featuredTitle,
  featuredDesc,
  showButton,
}) => {
  // const featuredProducts = [
  //   {
  //     id: 1,
  //     name: "T-Shirt",
  //     image: sample,
  //     size: ["S", "M", "L"],
  //     colors: ["Red", "Blue", "Black"],
  //     description: "A comfortable and stylish t-shirt for everyday wear.",
  //     price: 24.99,
  //   },
  //   {
  //     id: 2,
  //     name: "Jeans",
  //     image: sample,
  //     size: ["S", "M", "L", "XL"],
  //     colors: ["Blue", "Black"],
  //     description: "Classic denim jeans for a trendy and casual look.",
  //     price: 49.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   {
  //     id: 4,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   {
  //     id: 5,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   {
  //     id: 6,
  //     name: "Dress",
  //     image: sample,
  //     size: ["XS", "S", "M"],
  //     colors: ["Red", "Black", "White"],
  //     description: "Elegant and chic dress for special occasions.",
  //     price: 69.99,
  //   },
  //   // Add more products as needed
  // ];

  return (
    <section className="">
      <div className="rounded-div">
        <div className="flex flex-col items-center">
          <h1 className="text-[36px] font-arimo font-bold">{featuredTitle}</h1>
          <p className="text-[18px] font-lato mt-4 mb-10">{featuredDesc}</p>
          {/* card container */}
          <div className="grid grid-flow-row gap-x-4 gap-y-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* card */}
            {products.map((product) => (
              <Link
                to="#"
                key={product.id}
                className=" transition duration-300 hover:scale-105 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[17rem] object-cover"
                />
                <p className="mt-2 text-[0.9rem] text-lg hover:text-gray-600 transition font-poppins font-bold">
                  {product.title}
                </p>
                <p className="text-[#024E82] font-lato text-[15px]">
                  ${product.price}
                </p>
              </Link>
            ))}
          </div>

          {showButton && (
            <button className="bg-[#024E82] hover:bg-[#024E82]/90 transition text-[16px] text-white py-4 font-lato px-10 whitespace-nowrap mt-20">
              SHOP NOW
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
