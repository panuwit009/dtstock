export const menu: Menu[] = [
    { name: "หน้าแรก", path: "/home" },
    { name: "ทดสอบหน้าจอ", path: "/test/responsive" },
    { name: "ลองฝึกเขียนโค้ด", path: "/test/try" },
    { name: "ทดสอบ Message Api", path: "/test/messageapi" },
];

export interface Menu {
    name: string;
    path: string
}