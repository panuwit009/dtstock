import Scanbarcode from "./components/scanbarcode";
import Items from "./components/items";

export default function Home () {
    return (
        <>
        <Scanbarcode />
        <video id="video" style={{ width: "100%" }}></video>
        {/* <Items /> */}
        </>
    );
}