"use client";
import Moveable, { OnDrag } from "react-moveable";

export default function Try () {

    return (
        <div className="bg-red-200 text-5xl" id="test">
            Test
            <Moveable 
                target={document.getElementById("test")}
                container={null}
                origin={true}

                /* Resize event edges */
                edge={false}

                /* draggable */
                draggable={true}
                onDrag={({
                target,
                beforeDelta, beforeDist,
                left, top,
                right, bottom,
                delta, dist,
                transform,
                clientX, clientY,
                }: OnDrag) => {
                    console.log("onDrag left, top", left, top);
                    // target!.style.left = `${left}px`;
                    // target!.style.top = `${top}px`;
                    console.log("onDrag translate", dist);
                    target!.style.transform = transform;
                }}
            />
        </div>
                    
    )
  }