import Bed from "../Assets/FlashDeal/bed.png";
import Chair from "../Assets/FlashDeal/chair.png";
import Cabinet from "../Assets/FlashDeal/cabinet.png";
import Table from "../Assets/FlashDeal/table.png";
import hoverBed from "../Assets/FlashDeal/hoverBed.png";
import hoverChair from "../Assets/FlashDeal/hoverChair.png";
import hoverCabinet from "../Assets/FlashDeal/hoverCabinet.png";
import hoverTable from "../Assets/FlashDeal/hoverTable.png";

const FlashCardData = [
    {
        id: 1,
        img: Bed,
        discount: "50% Off",
        name: "Comfortable Bed",
        price: 100,
        hoveredImage: hoverBed,
        shortDescription: "This bed offers optimal comfort for a good night's sleep. Get the rest you deserve!",
        longDescription: "Experience the ultimate in comfort with our high-quality comfortable bed. Crafted with precision and designed for your well-being, this bed ensures a restful sleep every night. The combination of memory foam and pocket springs provides superior support and pressure relief, while the sturdy bed frame made from solid wood guarantees durability and longevity. Take advantage of the limited-time 50% discount and upgrade your sleeping experience today. Rediscover the joy of peaceful sleep and wake up refreshed and rejuvenated.",
        tags: ["bed", "comfort", "sleep"],
        categoryName: "Furniture",
        sku: "BED001"
    },
    {
        id: 2,
        img: Chair,
        discount: "50% Off",
        name: "Elegant Chair",
        price: 45,
        hoveredImage: hoverChair,
        shortDescription: "Add elegance to your space with this stylish chair. Sit back and relax in comfort.",
        longDescription: "Upgrade your seating experience with our elegant chair. With its sleek design and premium materials, this chair adds a touch of sophistication to any room. The cushioned seat and backrest provide exceptional comfort, while the sturdy construction ensures durability. Whether you're reading a book, watching TV, or simply unwinding after a long day, this chair offers the perfect blend of style and relaxation. Don't miss the opportunity to save 50% during our limited-time offer.",
        tags: ["chair", "elegant", "comfort"],
        categoryName: "Furniture",
        sku: "CHR001"
    },
    {
        id: 3,
        img: Cabinet,
        discount: "38% Off",
        name: "Modern Cabinet",
        price: 77,
        hoveredImage: hoverCabinet,
        shortDescription: "Enhance your storage with this modern cabinet. Keep your belongings organized in style.",
        longDescription: "Organize your belongings in style with our modern cabinet. With its sleek design and ample storage space, this cabinet is perfect for any room. Whether you need to store books, accessories, or other items, this cabinet provides a functional and aesthetic solution. The sturdy construction ensures durability, while the modern design adds a touch of elegance to your space. Take advantage of the 38% discount and elevate your storage capabilities today.",
        tags: ["cabinet", "modern", "storage"],
        categoryName: "Furniture",
        sku: "CAB001"
    },
    {
        id: 4,
        img: Table,
        discount: "60% Off",
        name: "Stylish Table",
        price: 65,
        hoveredImage: hoverTable,
        shortDescription: "Upgrade your space with this stylish table. Perfect for dining, working, or gathering.",
        longDescription: "Transform your space with our stylish table. Whether you're looking for a dining table, a work desk, or a place to gather with friends and family, this table offers versatility and elegance. The sturdy construction ensures stability and durability, while the modern design adds a touch of sophistication to any room. Don't miss out on the 60% discount and bring style and functionality into your space today.",
        tags: ["table", "stylish", "versatile"],
        categoryName: "Furniture",
        sku: "TBL001"
    },
];

export default FlashCardData;
