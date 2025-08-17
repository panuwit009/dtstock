import Scanbarcode from "./components/scanbarcode";
import Items from "./components/items";

export default function Home () {
    return (
        <>
        <video className="fixed inset-0" id="video" style={{ width: "100%" }}></video>
        <Scanbarcode />
        {/* <Items /> */}
        </>
    );
}