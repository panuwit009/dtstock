import Scanbarcode from "./components/scanbarcode";
import Items from "./components/items";
import FormInsertItem from "./components/forminsertitem";

export default function Home () {
    return (
        <>
        {/* <Scanbarcode /> */}
        <video className="" id="video" style={{ width: "100%" }}></video>
        {/* <Items /> */}
        <FormInsertItem />
        </>
    );
}