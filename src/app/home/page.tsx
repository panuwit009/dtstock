import Scanbarcode from "./components/scanbarcode";
import Items from "./components/items";

export default function Home () {
    return (
        <>
        <Scanbarcode />
        <video className="border-2 border-black m-4" id="video" style={{ width: "100%" }}></video>
        {/* <Items /> */}
        </>
    );
}