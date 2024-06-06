export default function Planet() {
    const image: string = `bg-[url('/sample-planet.png')]`;
    const image2: string = `bg-[url('/empty-planet.jpg')]`;
    function clickHandler (){

    }
    return <div className="w-2/3 max-w-xs aspect-square overflow-hidden" onClick={clickHandler}>
        <div className={`h-full w-full rounded-full bg-no-repeat bg-center bg-cover relative ${image} animate-spin-slow`}>


        </div>
    </div>;
}