import { RoomType } from "@/interFace/interFace";
import thumb1 from "../../public/assets/img/room/1.jpg";
import thumb2 from "../../public/assets/img/room/2.jpg";
import thumb3 from "../../public/assets/img/room/3.jpg";
import thumb4 from "../../public/assets/img/room/4.jpg";
import detailImg1 from "../../public/assets/img/room/detailImg1.jpg";
import detailImg2 from "../../public/assets/img/room/detailImg2.jpg";
import detailImg3 from "../../public/assets/img/room/detailImg3.jpg";
import detailImg4 from "../../public/assets/img/room/detailImg4.jpg";
import detailImg5 from "../../public/assets/img/room/detailImg5.jpg";
import detailImg6 from "../../public/assets/img/room/detailImg6.jpg";
import detailImg7 from "../../public/assets/img/room/detailImg7.jpg";
import detailImg8 from "../../public/assets/img/room/detailImg8.jpg";


const roomAndSuites: RoomType[] = [
  {
    id: 1,
    title: "Deluxe Room",
    price: 2300,
    doubleOccupancy: 2300,
    singleOccupancy: 2500,
    extrabad: 800,
    time: "NIGHT",
    img: thumb1,
    img1: detailImg1,
    img2: detailImg2,
    
    details:
      "Shubham Inn Hotel offers unforgettable  options. A memorable stay with delicious breakfast Join us.",
    list3: "Breakfast",
    list4: "Laundry",
  },
  {
    id: 2,
    title: "Super Deluxe Room ",
    price: 2700,
    doubleOccupancy: 3000,
    singleOccupancy: 2700,
    extrabad: 800,
    time: "NIGHT",
    img: thumb2,
    img1: detailImg3,
    img2: detailImg4,
    details:
      "Shubham Inn Hotel offers unforgettable options. A memorable stay with delicious breakfast Join us.",
    list3: "Breakfast",
    list4: "Laundry",
  },
  {
    id: 3,
    title: "Premium Room",
    price: 3300,
    doubleOccupancy: 3500,
    singleOccupancy: 3300,
    extrabad: 800,
    time: "NIGHT",
    img: thumb3,
    img1: detailImg5,
    img2: detailImg6,
    details:
      "Shubham Inn Hotel offers unforgettable  options. A memorable stay with delicious breakfast Join us.",
    list3: "Breakfast",
    list4: "Laundry",
  },
  {
    id: 4,
    title: "Suite Room",
    price: 4200,
    doubleOccupancy: 4200,
    singleOccupancy: 4200,
    extrabad: 800,
    time: "NIGHT",
    img: thumb4,
    img1: detailImg7,
    img2: detailImg8,
    details:
      "Shubham Inn Hotel offers unforgettable options. A memorable stay with delicious breakfast Join us.",
    list3: "Breakfast",
    list4: "Laundry",
    list5: "Bathtub",
  },
];

export default roomAndSuites;
