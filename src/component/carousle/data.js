import image1 from "../../assets/banner.jpg";
import image2 from "../../assets/banner.jpg";

export const images = [image1, image2];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
