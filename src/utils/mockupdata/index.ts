export interface Item {
    id: number;
    name: string;
    amount: number;
    image: string;
    exp: string;
}

export const mockupdata: Item[] = [
    // { id: 4, name: "ยาพารา", amount: 50, exp: "16/4/2561", image:"https://get.pxhere.com/photo/tree-horizon-road-field-prairie-highway-driving-asphalt-dirt-road-open-road-lane-plain-road-trip-grassland-infrastructure-rural-area-road-surface-nonbuilding-structure-controlled-access-highway-1456.jpg" },
    { id: 1, name: "ที่ขูดหินปูน", amount: 6, exp: "31/1/2561", image:"https://thaigroomingworld.com/cdn/shop/files/1_0c089071-3919-4233-ab7f-150f0ad59afe.jpg?v=1701003675&width=600"},
    { id: 2, name: "ไหมขัดฟัน", amount: 83, exp: "12/2/2561", image:"https://www.willdentdentalclinic.com/wp-content/uploads/2022/11/image2-6.png"},
    { id: 3, name: "แปรงสีฟันแปรงสีฟันแปรงสีฟันแปรงสีฟันแปรงสีฟันแปรงสีฟันแปรงสีฟันแปรงสีฟัน", amount: 22, exp: "1/3/2561", image:"https://dragcura.com/wp-content/uploads/2024/09/edelwhite-cleancurl-1.webp"},
    { id: 5, name: "ยาย่าฉันไม่ใช่เทวดา", amount: 48, exp: "11/5/2561", image:"https://cms.dmpcdn.com/musicarticle/2019/02/21/3fc84571-0385-4ee7-adfd-aac80b799175.jpg" },
    { id: 6, name: "ยาดม", amount: 100, exp: "13/6/2561", image:"https://www.mocagrimart.com/th/file/get/file/20230430d0164eceeb84beb9f4898f11d6a4ba5b132241.jpg" },
    { id: 7, name: "โทรไปไม่รับ You miss call, Oh I really miss you", amount: 30, exp: "14/7/2561", image:"https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/21/06/3a/21063af3-af02-c1c1-3f9b-39c23218944c/0.jpg/592x592bb.webp" },
    { id: 8, name: "ดาบพิฆาตอสูร เล่ม 3 ปลุกใจตนเอง", amount: 74, exp: "21/8/2561", image:"https://storage.naiin.com/system/application/bookstore/resource/product/201908/485398/1000223349_front_XXXL.jpg?imgname=%E0%B8%94%E0%B8%B2%E0%B8%9A%E0%B8%9E%E0%B8%B4%E0%B8%86%E0%B8%B2%E0%B8%95%E0%B8%AD%E0%B8%AA%E0%B8%B9%E0%B8%A3-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-3-%E0%B8%9B%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B9%83%E0%B8%88%E0%B8%95%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87" },
    { id: 9, name: "Bleach เทพมรณะ เล่ม 1", amount: 14, exp: "14/9/2561", image:"https://cdn-local.mebmarket.com/meb/server1/103242/Thumbnail/book_detail_large.gif?3" },
    { id: 10, name: "ไดโนพาร์ค ขนมทอดกรอบไดโนเสาร์ รสซีฟู้ด ขนาด 10 กรัม บรรจุ 12 ซอง", amount: 50, exp: "21/10/2561", image:"https://th-live-01.slatic.net/p/9dabe50f482d16e84c04f17f034b325d.png" },
];


export interface List {
    id: number;
    name: string;
    icon: string;
}

export const categorys: List[] = [
    {id: 1, name: "ครุภัณฑ์", icon: '🔧'},
    {id: 2, name: "วัสดุทางทันตกรรม", icon: '🦷'},
    {id: 3, name: "ยา", icon: '💊'},
    {id: 4, name: "ของขาย", icon: '🛒'},
    {id: 5, name: "เวชภัณท์", icon: '⚕️'},
]