import { FaHeadset, FaLock, FaShippingFast, FaUndo } from "react-icons/fa";

// interface ProductProps {
//   products: Product[];
//   featuredTitle: string;
//   featuredDesc: string;
// }

// interface Product {
//   id: number;
//   image: string;
//   title: string;
//   price: string;
// }

const services = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders",
  },
  {
    icon: <FaHeadset />,
    title: "Support 24/7",
    description: "24/7 customer support for any assistance",
  },
  {
    icon: <FaUndo />,
    title: "30 Days Return",
    description: "30 days return policy for hassle-free returns",
  },
  {
    icon: <FaLock />,
    title: "100% Payment Secure",
    description: "Secure payment options to protect your information",
  },
];

const Service = () => {
  return (
    <section className="">
      <div className="rounded-div">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="text-3xl text-[#024E82] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
