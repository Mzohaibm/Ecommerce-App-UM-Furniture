import best1 from "../Assets/BestSelling/bed1.png";
import best2 from "../Assets/BestSelling/bed2.png";
import best3 from "../Assets/BestSelling/bed3.png";
import best4 from "../Assets/BestSelling/chair1.png";
import best5 from "../Assets/BestSelling/chair2.png";
import best6 from "../Assets/BestSelling/table1.png";

import Hover_best1 from "../Assets/BestSelling/hoverBed1.png";
import Hover_best2 from "../Assets/BestSelling/hoverBed2.png";
import Hover_best3 from "../Assets/BestSelling/hoverBed3.png";
import Hover_best4 from "../Assets/BestSelling/hoverChair1.png";
import Hover_best5 from "../Assets/BestSelling/hoverChair2.png";
import Hover_best6 from "../Assets/BestSelling/hoverTable1.png";

const BestSellingData = [
  {
    id: 1,
    discount: -14,
    img: best1,
    name: "SlumberComfort Cloud Pillow",
    rating: 5,
    delivery: 2,
    oldPrice: 250,
    price: 200,
    hoveredImage: Hover_best1,
    shortDescription:
      "Experience ultimate comfort with the SlumberComfort Cloud Pillow. It provides excellent support and a plush feel, ensuring a good night's sleep.",
    longDescription:
      "The SlumberComfort Cloud Pillow is specially designed to provide exceptional comfort and support. It features a soft and breathable cover, as well as a filling that contours to your head and neck for personalized comfort. With its premium construction and innovative design, this pillow will help you achieve a restful and rejuvenating sleep every night. Invest in your sleep quality with the SlumberComfort Cloud Pillow.",
    tags: ["pillow", "comfort", "sleep"],
    categoryName: "Bedding",
    sku: "PIL001",
  },
  {
    id: 2,
    discount: -20,
    img: best2,
    name: "DreamSerenity Memory Foam Mattress",
    rating: 5,
    delivery: 2,
    price: 180,
    oldPrice: 220,
    hoveredImage: Hover_best2,
    shortDescription:
      "Experience ultimate comfort and support with the DreamSerenity Memory Foam Mattress. It conforms to your body, relieving pressure points for a restful sleep.",
    longDescription:
      "The DreamSerenity Memory Foam Mattress is designed to provide exceptional comfort and support. It features multiple layers of high-quality memory foam that conform to your body, relieving pressure points and ensuring a restful sleep. The mattress is also breathable and temperature-regulating, keeping you cool and comfortable throughout the night. Upgrade your sleep experience with the DreamSerenity Memory Foam Mattress.",
    tags: ["mattress", "memory foam", "comfort"],
    categoryName: "Furniture",
    sku: "MAT001",
  },
  {
    id: 3,
    discount: -24,
    img: best3,
    name: "RelaxaSeat Ergonomic Office Chair",
    rating: 5,
    delivery: 3,
    price: 150,
    oldPrice: 185,
    hoveredImage: Hover_best3,
    shortDescription:
      "Upgrade your office with the RelaxaSeat Ergonomic Office Chair. It provides excellent support and promotes good posture for long hours of comfortable work.",
    longDescription:
      "The RelaxaSeat Ergonomic Office Chair is designed to provide optimal support and comfort during long hours of work. It features adjustable height, lumbar support, and armrests to promote good posture and reduce strain on your body. The chair is made from high-quality materials and offers a sleek and professional design. Enhance your workspace with the RelaxaSeat Ergonomic Office Chair.",
    tags: ["office chair", "ergonomic", "comfort"],
    categoryName: "Office Furniture",
    sku: "CHA001",
  },
  {
    id: 4,
    discount: -18,
    img: best4,
    name: "LoungeMasters Reclining Sofa Set",
    rating: 5,
    delivery: 2,
    price: 190,
    oldPrice: 240,
    hoveredImage: Hover_best4,
    shortDescription:
      "Create a cozy and comfortable living room with the LoungeMasters Reclining Sofa Set. It offers plush seating and adjustable reclining positions.",
    longDescription:
      "The LoungeMasters Reclining Sofa Set is perfect for creating a relaxing and inviting living room. It features a reclining sofa and loveseat with plush cushioning and adjustable reclining positions. The set is upholstered in high-quality fabric and offers excellent durability and comfort. Transform your living space with the LoungeMasters Reclining Sofa Set.",
    tags: ["sofa set", "reclining", "comfort"],
    categoryName: "Furniture",
    sku: "SOF001",
  },
  {
    id: 5,
    discount: -22,
    img: best5,
    name: "OrganizePro 5-Tier Storage Rack",
    rating: 4.9,
    delivery: 3,
    price: 130,
    oldPrice: 170,
    hoveredImage: Hover_best5,
    shortDescription:
      "Keep your space organized with the OrganizePro 5-Tier Storage Rack. It provides ample storage and sturdy construction for your belongings.",
    longDescription:
      "The OrganizePro 5-Tier Storage Rack is designed to help you keep your space neat and organized. It features five spacious shelves that can accommodate various items, from books and boxes to kitchen supplies and decor. The rack is made from durable materials and offers easy assembly. Simplify your storage solutions with the OrganizePro 5-Tier Storage Rack.",
    tags: ["storage rack", "organization", "home"],
    categoryName: "Home Organization",
    sku: "RAC001",
  },
  {
    id: 6,
    discount: -26,
    img: best6,
    name: "GatherHub Extendable Dining Table",
    rating: 5,
    delivery: 2,
    price: 170,
    oldPrice: 210,
    hoveredImage: Hover_best6,
    shortDescription:
      "Host memorable gatherings with the GatherHub Extendable Dining Table. It offers ample seating space and a stylish design for your dining area.",
    longDescription:
      "The GatherHub Extendable Dining Table is perfect for accommodating guests and hosting memorable gatherings. It features an extendable design that allows you to adjust the table size based on your needs. The table is made from high-quality materials and offers a stylish and modern aesthetic. Elevate your dining experience with the GatherHub Extendable Dining Table.",
    tags: ["dining table", "extendable", "entertaining"],
    categoryName: "Furniture",
    sku: "TAB001",
  },
  // Add more items with their respective properties...
];

export default BestSellingData;
