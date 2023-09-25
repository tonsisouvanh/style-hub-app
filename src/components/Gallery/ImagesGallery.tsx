import { scaleAnimate } from "../../animation";
import { motion } from "framer-motion";
const ImagesGallery = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      variants={scaleAnimate}
      className="w-full"
    >
      <div className="rounded-div w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/375798304_194143990348209_5423151304707976390_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGvl8zSwcC7KLn6nmt91-ac8Cbu-FL1GaHwJu74UvUZod3gp_lkNl2daDGkvlWlN1RTE1dcyljIJElejcLSp4W6&_nc_ohc=Ps6_2TP6SY0AX9ItooI&_nc_ht=scontent.fvte2-2.fna&oh=00_AfAwc0tiwOLI0_AXWUdjMRYpuI0UPU5zeWOYrZzTH4DS-g&oe=65118B67"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/375749522_194143977014877_6569909186087287104_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGh7uMtOwn1EEuk6Iak6c8pDmRfVsza3PEOZF9WzNrc8Xs9D-_8pR20wfmuMrujUN7c_Dh3G8KS2M7ZtnRCIrUz&_nc_ohc=pAmJNlhSi_8AX_PnMwq&_nc_ht=scontent.fvte2-2.fna&oh=00_AfAW_rZCG_e2KciRbirg5QUURyFxng8Rb6gwK5cv8mEY8g&oe=6512A129"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/375748431_194143933681548_6296538797715444721_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEk0vpGeJU07Wie3dee3zmul0FAAGH6vkOXQUAAYfq-Q3dktmTsq_ocg8Jo0vj3S86V95IP9YaIqR2a6UrTkqom&_nc_ohc=jv2tlqK3axgAX85O6P0&_nc_ht=scontent.fvte2-2.fna&oh=00_AfDClMg7Vb6FYcHtFkmRAs-4B8ibkUAbESpFAD-c_Hik_w&oe=65122B6D"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/375043140_193455597083715_6283193605951911921_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEIPd-UITMkz4sEC7nTY3ERdLoQ7-vqqdh0uhDv6-qp2IMvDe0CKJWIBrNOVL2y7X3MFD21F0rjD357ZBxdnOYM&_nc_ohc=rQOOUJqWFR8AX9CeEH4&_nc_ht=scontent.fvte2-3.fna&oh=00_AfC3nw64XWc_XFcvEqmAgRR_39xHKv-jWjR5RoBFFXzPoA&oe=65115440"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/372687210_193455583750383_3904190492855713614_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFogAFJ-p5uofHyDWduPFZsKWDL-xLOr9spYMv7Es6v22yFPc7m_aEIU7koJHtdOkZnj9BB1FSTIrT45j2XRDkn&_nc_ohc=04Z720ALueQAX9eVZjN&_nc_ht=scontent.fvte2-2.fna&oh=00_AfBRgYrWsMXf0qC-lKgikiM24477X91qx59ZD8VLgMbiQw&oe=651158C8"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/372676844_192553303840611_5463767651311755956_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHpD-p46BHdAywJ0pE-q-R2BiT3pRRl4_0GJPelFGXj_VkeWDMGg8IZ9QgsvHPfU-JujY4naMXI6vIYl-YyXbIP&_nc_ohc=3QhjNyX4kU8AX_om0AC&_nc_ht=scontent.fvte2-1.fna&oh=00_AfCF6iWyGFsVRkRJWlA96IbpQZiGENkVOIDXpZsiiXdlDA&oe=65118C39"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/372685561_192553127173962_4711554473199881182_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeESz8YnwXzbIB_k8OXFPj1BkvC9lYvdXjeS8L2Vi91eNyo0td4mnuE4xPB9gDYqmxUtylVgJMiG9Y0PnX-dh6Nn&_nc_ohc=dGe9fQpp-68AX_0OZ4t&_nc_ht=scontent.fvte2-3.fna&oh=00_AfCVFD5kAWsDlxAfOkb4QA-9ZaYXqUZpqkdvA65IO9Ub2g&oe=65122E52"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://drive.google.com/uc?id=1g8z-AXQ4i55CqqU3NbMvkzBBG7izClG1"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/370551198_187800684315873_2230491020735771181_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGUMGKwSaOWDaQCBN-unucy5MJXUyRB-rzkwldTJEH6vInUqe58suk_3MpUYkEvxpNbQMfdREjrYrN08L6gola3&_nc_ohc=Jqt4Z1qlEzwAX9JVk9s&_nc_ht=scontent.fvte2-3.fna&oh=00_AfBRCar6lFug9O1H4B-fveaMJUXwbLfYklmgshp3nyiKuA&oe=6512EFF4"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/370533748_187800667649208_6767497048281212567_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHRC2hEgHQ016nB6E_g3qluGacSqO2MJr8ZpxKo7Ywmv_ljGlyaLFVRz-ewT7RXCREOUqqxxOFaF0cM-mhQmvdO&_nc_ohc=kBX4QZpuPfUAX9kNrTB&_nc_ht=scontent.fvte2-3.fna&oh=00_AfDAevIALXy3LkEPpfw1UeCDo6lq4QYEYXOv_pCJi32ydg&oe=6511957C"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  // src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  src=""
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://drive.google.com/uc?id=1zU-U9uc9sJiMjSl481C3fzOL4xXN9RBu"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* <motion.div className=" grid gap-8 font-notosanslao md:grid-cols-fluid"> */}
          {/* <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24"> */}
          {/* <motion.div className="flex flex-wrap">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                />
              </div>
            </div>
          </motion.div> */}
          {/* </div> */}
          {/* </motion.div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default ImagesGallery;
