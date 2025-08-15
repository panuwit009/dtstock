import Scanbarcode from "./components/scanbarcode";

export default function Home () {
    return (
        <>
        <Scanbarcode />
        <video id="video" style={{ width: "100%" }}></video>
        <div>sad</div>
        </>
    );
}