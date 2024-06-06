import { useEffect, useState } from "react";

interface CoinUpProps {
    onDisappear: () => void;
    position: { x: number, y: number }
}
const disappearTime: number = 1000;
const moveFrameRate: number = 10;
export default function CoinUp({ onDisappear, position }: CoinUpProps) {
    const [thisPosition, setThisPosition] = useState(position);
    useEffect(() => {
        const timeoutRef = setTimeout(onDisappear, disappearTime);
        const intervalRef = setInterval(() => {
            setThisPosition((pervPos) => {
                return {
                    ...pervPos, y: pervPos.y - 2
                }
            })
        }, moveFrameRate)
        return () => {
            clearTimeout(timeoutRef);
            clearInterval(intervalRef);
        };

    }, [onDisappear])

    return <div style={{ top: thisPosition.y, left: thisPosition.x }} className={`absolute cursor-default select-none font-bold text-lg rounded-full bg-gray-100 aspect-square  bg-opacity-10 flex  w-7 h-7 items-center justify-center animate-disappear`}>
        <span className=" aspect-square text-center text-white">
            +1
        </span>
    </div>;
}