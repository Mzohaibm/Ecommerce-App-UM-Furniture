

import bed1 from "../Assets/Categories/bed1.png";
import bed2 from "../Assets/Categories/bed2.png";
import bed3 from "../Assets/Categories/bed3.png";
import bed4 from "../Assets/Categories/bed4.png";
import hover_bed1 from "../Assets/Categories/hoverBed1.png";
import hover_bed2 from "../Assets/Categories/hoverBed2.png";
import hover_bed3 from "../Assets/Categories/hoverBed3.png";
import hover_bed4 from "../Assets/Categories/hoverBed4.png";

import chair1 from "../Assets/Categories/chair1.png";
import chair2 from "../Assets/Categories/chair2.png";
import chair3 from "../Assets/Categories/chair3.png";
import chair4 from "../Assets/Categories/chair4.png";
import hover_chair1 from "../Assets/Categories/hoverChair1.png";
import hover_chair2 from "../Assets/Categories/hoverChair2.png";
import hover_chair3 from "../Assets/Categories/hoverChair3.png";
import hover_chair4 from "../Assets/Categories/hoverChair4.png";

import table1 from "../Assets/Categories/table1.png";
import table2 from "../Assets/Categories/table2.png";
import table3 from "../Assets/Categories/table3.png";
import table4 from "../Assets/Categories/table4.png";
import hover_table1 from "../Assets/Categories/hoverTable1.png";
import hover_table2 from "../Assets/Categories/hoverTable2.png";
import hover_table3 from "../Assets/Categories/hoverTable3.png";
import hover_table4 from "../Assets/Categories/hoverTable4.png";

import cabinet1 from "../Assets/Categories/cabinet1.png";
import cabinet2 from "../Assets/Categories/cabinet2.png";
import cabinet3 from "../Assets/Categories/cabinet3.png";
import cabinet4 from "../Assets/Categories/cabinet4.png";
import hover_cabinet1 from "../Assets/Categories/hoverCabinet1.png";
import hover_cabinet2 from "../Assets/Categories/hoverCabinet2.png";
import hover_cabinet3 from "../Assets/Categories/hoverCabinet3.png";
import hover_cabinet4 from "../Assets/Categories/hoverCabinet4.png";

const products = [
    // Category: bed
    {
        id: 1,
        name: "Harmony Dream Bed",
        price: 100,
        discountPercentage: 10,
        category: "bed",
        img: bed1,
        hoveredImage: hover_bed1,
        shortDescription: "Experience ultimate comfort and relaxation with the Harmony Dream Bed.",
        longDescription: "Transform your bedroom into a tranquil sanctuary with the Harmony Dream Bed. Crafted with the finest materials and expert craftsmanship, this bed offers unrivaled comfort and style. The ergonomic design provides optimal support for your body, relieving pressure points and promoting a deep, rejuvenating sleep. Its luxurious upholstery and sleek silhouette add an elegant touch to any contemporary or traditional bedroom decor.",
        categoryName: "Bed",
        oldPrice: 100,
        tag: "New",
        sku: "HD-BED-001"
    },
    {
        id: 2,
        name: "Serenity Sleep Bed",
        price: 150,
        discountPercentage: 20,
        category: "bed",
        img: bed2,
        hoveredImage: hover_bed2,
        shortDescription: "Indulge in pure serenity with the Serenity Sleep Bed.",
        longDescription: "Create your personal haven of tranquility with the Serenity Sleep Bed. Its plush cushioning and ergonomic design cradle your body in blissful comfort, while the sturdy frame ensures long-lasting durability. Experience the ultimate sleep experience with the Serenity Sleep Bed's premium materials and advanced support system. Transform your bedroom into a sanctuary of relaxation and wake up refreshed and rejuvenated every morning.",
        categoryName: "Bed",
        oldPrice: 200,
        tag: "Sale",
        sku: "SS-BED-002"
    },
    {
        id: 3,
        name: "Elegance Comfort Bed",
        price: 200,
        discountPercentage: 15,
        category: "bed",
        img: bed3,
        hoveredImage: hover_bed3,
        shortDescription: "Experience the perfect blend of elegance and comfort with the Elegance Comfort Bed.",
        longDescription: "Elevate your bedroom decor with the Elegance Comfort Bed. Combining exquisite design and exceptional comfort, this bed is a true statement piece. The premium upholstery and meticulous craftsmanship add a touch of sophistication to any space. With its ergonomic support and plush cushioning, the Elegance Comfort Bed ensures a restful sleep night after night. Create a luxurious retreat in your own home with this elegant and comfortable bed.",
        categoryName: "Bed",
        oldPrice: 250,
        tag: "Clearance",
        sku: "EC-BED-003"
    },
    {
        id: 4,
        name: "Relaxing Haven Bed",
        price: 180,
        discountPercentage: 25,
        category: "bed",
        img: bed4,
        hoveredImage: hover_bed4,
        shortDescription: "Escape to a Relaxing Haven with this exquisite bed.",
        longDescription: "Transform your bedroom into a peaceful sanctuary with the Relaxing Haven Bed. Crafted with meticulous attention to detail, this bed combines style and comfort effortlessly. The plush cushioning and ergonomic design provide optimal support, ensuring a blissful night's sleep. Unwind and recharge in your own personal haven, enveloped in the luxurious upholstery and elegant aesthetics of the Relaxing Haven Bed.",
        categoryName: "Bed",
        oldPrice: 220,
        tag: "Limited Stock",
        sku: "RH-BED-004"
    },

    // Category: cabinet
    {
        id: 5,
        name: "Modern Storage Cabinet",
        price: 80,
        discountPercentage: 12,
        category: "cabinet",
        img: cabinet1,
        hoveredImage: hover_cabinet1,
        shortDescription: "Add modern storage solutions to your space with this Storage Cabinet.",
        longDescription: "Maximize storage and style with the Modern Storage Cabinet. Its sleek design and spacious compartments make it a perfect addition to any contemporary living space. Store your essentials in an organized manner while elevating your home decor. The durable construction ensures long-lasting quality and functionality. Experience the perfect blend of practicality and modern design with this versatile storage solution.",
        categoryName: "Cabinet",
        oldPrice: 90,
        tag: "Featured",
        sku: "MSC-CAB-001"
    },
    {
        id: 6,
        name: "Vintage Wood Cabinet",
        price: 120,
        discountPercentage: 18,
        category: "cabinet",
        img: cabinet2,
        hoveredImage: hover_cabinet2,
        shortDescription: "Enhance your space with the timeless charm of this Vintage Wood Cabinet.",
        longDescription: "Add a touch of nostalgia to your living space with the Vintage Wood Cabinet. Crafted from high-quality wood and featuring a vintage-inspired design, this cabinet brings a sense of timeless charm to any room. The spacious shelves and drawers provide ample storage for your belongings, while the intricate details and ornate hardware add an elegant touch. Whether used in the living room, dining room, or bedroom, this Vintage Wood Cabinet is sure to enhance the beauty and functionality of your space.",
        categoryName: "Cabinet",
        oldPrice: 150,
        tag: "Limited Edition",
        sku: "VWCAB-002"
    },
    {
        id: 7,
        name: "Sleek Display Cabinet",
        price: 90,
        discountPercentage: 20,
        category: "cabinet",
        img: cabinet3,
        hoveredImage: hover_cabinet3,
        shortDescription: "Showcase your treasures with this Sleek Display Cabinet.",
        longDescription: "Elevate your home decor with the Sleek Display Cabinet. Designed with clean lines and a modern aesthetic, this cabinet provides the perfect showcase for your collectibles, books, or decorative items. The transparent glass panels allow for unobstructed views, while the sturdy construction ensures stability and durability. With its sleek and minimalist design, this Sleek Display Cabinet effortlessly blends with any interior style, making it a versatile and functional addition to your space.",
        categoryName: "Cabinet",
        oldPrice: 110,
        tag: "Best Seller",
        sku: "SDCAB-003"
    },
    {
        id: 8,
        name: "Minimalist Corner Cabinet",
        price: 100,
        discountPercentage: 15,
        category: "cabinet",
        img: cabinet4,
        hoveredImage: hover_cabinet4,
        shortDescription: "Optimize space with this Minimalist Corner Cabinet.",
        longDescription: "Make the most of your corner space with the Minimalist Corner Cabinet. This sleek and compact cabinet is designed to fit seamlessly into any corner of your room, providing a practical storage solution without taking up much space. The minimalist design and clean lines add a touch of modernity to your interior decor. With its ample storage capacity and sturdy construction, this Minimalist Corner Cabinet is perfect for storing and displaying your belongings in style.",
        categoryName: "Cabinet",
        oldPrice: 120,
        tag: "Clearance",
        sku: "MCCAB-004"
    },
    {
        id: 9,
        name: "Cozy Lounge Chair 1",
        price: 50,
        discountPercentage: 10,
        category: "chair",
        img: chair1,
        hoveredImage: hover_chair1,
        shortDescription: "Experience ultimate comfort with the Cozy Lounge Chair 1.",
        longDescription: "Sink into luxurious comfort with the Cozy Lounge Chair 1. Designed with plush cushioning and a sleek silhouette, this chair offers the perfect spot for relaxation. Whether used in your living room, bedroom, or office, it adds a touch of elegance and comfort to any space. The ergonomic design provides excellent support for your back, making it ideal for long hours of sitting. Sit back, unwind, and enjoy the ultimate comfort of the Cozy Lounge Chair 1.",
        categoryName: "Chair",
        oldPrice: 60,
        tag: "New Arrival",
        sku: "CLC1-CHA-009"
    },
    {
        id: 10,
        name: "Ergonomic Office Chair 2",
        price: 60,
        discountPercentage: 15,
        category: "chair",
        img: chair2,
        hoveredImage: hover_chair2,
        shortDescription: "Stay productive and comfortable with the Ergonomic Office Chair 2.",
        longDescription: "Boost your productivity and comfort with the Ergonomic Office Chair 2. This chair is designed with a focus on ergonomics, providing excellent lumbar support and adjustable features to suit your preferences. Its sleek design and premium materials make it a stylish addition to any office space. Whether you're working, studying, or gaming, the Ergonomic Office Chair 2 ensures optimal comfort and support throughout the day.",
        categoryName: "Chair",
        oldPrice: 70,
        tag: "Best Seller",
        sku: "EOC2-CHA-010"
    },
    {
        id: 11,
        name: "Contemporary Dining Chair 3",
        price: 70,
        discountPercentage: 20,
        category: "chair",
        img: chair3,
        hoveredImage: hover_chair3,
        shortDescription: "Upgrade your dining experience with the Contemporary Dining Chair 3.",
        longDescription: "Elevate your dining area with the sleek and stylish Contemporary Dining Chair 3. Crafted with premium materials and a contemporary design, this chair adds a touch of sophistication to any dining space. The comfortable seat and backrest ensure a pleasant dining experience, whether it's for everyday meals or special occasions. With its durable construction and timeless design, the Contemporary Dining Chair 3 combines functionality and aesthetics in perfect harmony.",
        categoryName: "Chair",
        oldPrice: 80,
        tag: "Limited Stock",
        sku: "CDC3-CHA-011"
    },
    {
        id: 12,
        name: "Retro Accent Chair 4",
        price: 55,
        discountPercentage: 12,
        category: "chair",
        img: chair4,
        hoveredImage: hover_chair4,
        shortDescription: "Add a touch of retro charm with the Retro Accent Chair 4.",
        longDescription: "Infuse your space with retro vibes using the Retro Accent Chair 4. Its unique design and vibrant colors make it a standout piece in any room. The comfortable seat and armrests provide a cozy spot for relaxation. Whether used in your living room, bedroom, or study, this chair adds a touch of nostalgia and charm to your decor. Embrace the retro aesthetic with the Retro Accent Chair 4 and create a stylish focal point in your space.",
        categoryName: "Chair",
        oldPrice: 65,
        tag: "Clearance",
        sku: "RAC4-CHA-012"
    },

    // Category: table
    {
        id: 13,
        name: "Classic Coffee Table 1",
        price: 120,
        discountPercentage: 15,
        category: "table",
        img: table1,
        hoveredImage: hover_table1,
        shortDescription: "Enhance your living room with the Classic Coffee Table 1.",
        longDescription: "Upgrade your living room with the Classic Coffee Table 1. Its timeless design and sturdy construction make it a perfect addition to any interior style. The spacious tabletop provides ample space for displaying decor items or serving drinks and snacks. With its durable materials and elegant aesthetics, the Classic Coffee Table 1 combines functionality and style in one beautiful piece of furniture.",
        categoryName: "Table",
        oldPrice: 140,
        tag: "Featured",
        sku: "CCT1-TAB-013"
    },
    {
        id: 14,
        name: "Extendable Dining Table 2",
        price: 150,
        discountPercentage: 20,
        category: "table",
        img: table2,
        hoveredImage: hover_table2,
        shortDescription: "Create a versatile dining space with the Extendable Dining Table 2.",
        longDescription: "Bring flexibility and style to your dining area with the Extendable Dining Table 2. This table features a convenient extendable design, allowing you to accommodate more guests when needed. Its sleek and modern design adds a contemporary touch to any dining space. Crafted with high-quality materials, this table offers durability and functionality for years to come. Upgrade your dining experience with the versatile and stylish Extendable Dining Table 2.",
        categoryName: "Table",
        oldPrice: 180,
        tag: "Limited Stock",
        sku: "EDT2-TAB-014"
    }, {
        id: 15,
        name: "Industrial Side Table 3",
        price: 130,
        discountPercentage: 12,
        category: "table",
        img: table3,
        hoveredImage: hover_table3,
        shortDescription: "Add an industrial flair to your space with the Industrial Side Table 3.",
        longDescription: "Infuse your space with an industrial vibe using the Industrial Side Table 3. This table combines sleek metal legs with a rustic wooden tabletop, creating a unique and stylish piece for your space. Its compact size makes it versatile, suitable for use as a side table or accent piece in any room. With its durability and rugged charm, the Industrial Side Table 3 is a perfect addition to industrial-inspired interiors.",
        categoryName: "Table",
        oldPrice: 150,
        tag: "New Arrival",
        sku: "IST3-TAB-015"
    },
    {
        id: 16,
        name: "Modern Console Table 4",
        price: 160,
        discountPercentage: 18,
        category: "table",
        img: table4,
        hoveredImage: hover_table4,
        shortDescription: "Add a touch of modern sophistication with the Modern Console Table 4.",
        longDescription: "Upgrade your entryway or living room with the sleek and sophisticated Modern Console Table 4. This table features clean lines and a minimalist design, making it a versatile piece for various interior styles. The spacious tabletop provides ample space for displaying decor items or storing everyday essentials. Crafted with high-quality materials, the Modern Console Table 4 offers both style and functionality. Elevate your space with this modern and elegant piece of furniture.",
        categoryName: "Table",
        oldPrice: 190,
        tag: "Best Seller",
        sku: "MCT4-TAB-016"
    }
];

export default products;