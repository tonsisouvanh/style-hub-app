import { useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: products } = useSelector((state: RootState) => state.products);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg">
            <img
              src={product?.images[0]}
              alt={product?.name}
              className="h-auto w-full"
            />
            {product?.images.length > 1 && (
              <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-2">
                {product?.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={product?.name}
                    className={`h-auto w-24 cursor-pointer ${
                      index === 0 ? "border-2 border-indigo-500" : ""
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-gray-500">{product?.categories.join(", ")}</p>
          <div className="flex items-center">
            <p className="mr-2 text-4xl font-bold">
              {formatPrice(product?.price)}
            </p>
            {product?.discount?.type === "percentage" && (
              <p className="text-red-500">{product?.discount?.value}% off</p>
            )}
          </div>
          <p className="text-gray-600">{product?.description}</p>
          <div className="flex items-center space-x-2">
            {product?.isNewArrival && (
              <span className="rounded-full bg-green-500 px-2 py-1 text-sm text-white">
                New Arrival
              </span>
            )}
            {product?.isFeatured && (
              <span className="rounded-full bg-yellow-500 px-2 py-1 text-sm text-white">
                Featured
              </span>
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold">Available Sizes</h2>
            <div className="flex space-x-2">
              {product &&
                product?.inventory?.map((inven) => (
                  <span
                    key={inven.size}
                    className="rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-600"
                  >
                    {inven.size} * {inven.quantity}
                  </span>
                ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Ratings</h2>
            <div className="flex items-center space-x-1">
              {Array.from({ length: product?.ratings }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Stock</h2>
            <p className="text-gray-600">{product?.stock} available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
