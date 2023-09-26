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
        <div className="px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/375798304_194143990348209_5423151304707976390_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGvl8zSwcC7KLn6nmt91-ac8Cbu-FL1GaHwJu74UvUZod3gp_lkNl2daDGkvlWlN1RTE1dcyljIJElejcLSp4W6&_nc_ohc=Ps6_2TP6SY0AX9ItooI&_nc_ht=scontent.fvte2-2.fna&oh=00_AfAwc0tiwOLI0_AXWUdjMRYpuI0UPU5zeWOYrZzTH4DS-g&oe=65118B67"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/375749522_194143977014877_6569909186087287104_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGh7uMtOwn1EEuk6Iak6c8pDmRfVsza3PEOZF9WzNrc8Xs9D-_8pR20wfmuMrujUN7c_Dh3G8KS2M7ZtnRCIrUz&_nc_ohc=pAmJNlhSi_8AX_PnMwq&_nc_ht=scontent.fvte2-2.fna&oh=00_AfAW_rZCG_e2KciRbirg5QUURyFxng8Rb6gwK5cv8mEY8g&oe=6512A129"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/375748431_194143933681548_6296538797715444721_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEk0vpGeJU07Wie3dee3zmul0FAAGH6vkOXQUAAYfq-Q3dktmTsq_ocg8Jo0vj3S86V95IP9YaIqR2a6UrTkqom&_nc_ohc=jv2tlqK3axgAX85O6P0&_nc_ht=scontent.fvte2-2.fna&oh=00_AfDClMg7Vb6FYcHtFkmRAs-4B8ibkUAbESpFAD-c_Hik_w&oe=65122B6D"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/375043140_193455597083715_6283193605951911921_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeEIPd-UITMkz4sEC7nTY3ERdLoQ7-vqqdh0uhDv6-qp2IMvDe0CKJWIBrNOVL2y7X3MFD21F0rjD357ZBxdnOYM&_nc_ohc=rQOOUJqWFR8AX9CeEH4&_nc_ht=scontent.fvte2-3.fna&oh=00_AfC3nw64XWc_XFcvEqmAgRR_39xHKv-jWjR5RoBFFXzPoA&oe=65115440"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/372687210_193455583750383_3904190492855713614_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFogAFJ-p5uofHyDWduPFZsKWDL-xLOr9spYMv7Es6v22yFPc7m_aEIU7koJHtdOkZnj9BB1FSTIrT45j2XRDkn&_nc_ohc=04Z720ALueQAX9eVZjN&_nc_ht=scontent.fvte2-2.fna&oh=00_AfBRgYrWsMXf0qC-lKgikiM24477X91qx59ZD8VLgMbiQw&oe=651158C8"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/370551198_187800684315873_2230491020735771181_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGUMGKwSaOWDaQCBN-unucy5MJXUyRB-rzkwldTJEH6vInUqe58suk_3MpUYkEvxpNbQMfdREjrYrN08L6gola3&_nc_ohc=Jqt4Z1qlEzwAX9JVk9s&_nc_ht=scontent.fvte2-3.fna&oh=00_AfBRCar6lFug9O1H4B-fveaMJUXwbLfYklmgshp3nyiKuA&oe=6512EFF4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImagesGallery;
