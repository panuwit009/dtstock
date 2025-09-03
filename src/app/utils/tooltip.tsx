import { useShow } from "./showcontext";

export default function Tooltip () {
    const { setShow } = useShow();
    
    return (
        <div onMouseEnter={()=> setShow(null)}
        className="fixed top-[50dvh] left-[50dvh]"
        >asdasdasd</div>
    );
}