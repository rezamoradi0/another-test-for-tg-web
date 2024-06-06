import { useState } from "react";
import CoinUp from "./CoinUp";

type CoinUpType = {
    key: number;
    position: { x: number, y: number };
}
interface PlanetProps{
    increase: () => void;
};
export default function Planet({ increase}: PlanetProps) {
    const image: string = `bg-[url('/sample-planet.png')]`;
    const image2: string = `bg-[url('/empty-planet.jpg')]`;
    const image3: string = `bg-[url('/test.jpg')]`;
    const [coinKeys, setCoinKeys] = useState<CoinUpType[]>([]);

    function clickHandler(event: React.MouseEvent) {
        const bounding = event.currentTarget.getBoundingClientRect();
        const x: number = event.clientX - bounding.left;
        const y: number = event.clientY - bounding.top;
        const key = Date.now();
        increase();
        setCoinKeys(pervKeys => [...pervKeys, { key, position: { x, y } }]);
    }
    function removeCoins(_key: number) {
        setCoinKeys((pervKeys) => {
            return pervKeys.filter(({ key }) => {
                return key !== _key;
            });
        })
    }
    return <div className="relative w-5/6 sm:w-4/5 md:2/3 max-w-xs aspect-square overflow-hidden" onClick={(event) => {
        clickHandler(event);
    }}>




        <div className={`h-full w-full rounded-3xl bg-no-repeat bg-center bg-cover relative ${image3}`}>


        </div>
        {coinKeys.map(({ key, position }) => <CoinUp position={position} onDisappear={() => {
            removeCoins(key)
        }} />)}

    </div>;
}