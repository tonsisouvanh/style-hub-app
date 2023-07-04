import React from "react";

const SingleProduct = () => {
  return (
    <>
      <div className="">
        <div className="rounded-div">
          <div className="flex items-start justify-btween">
            <img
              className="w-[40rem] h-[50rem] object-cover "
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
              alt=""
            />
            <div className="">
              <p>home / shop / women / shop </p>
              <h2>Plain White Shirt</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
