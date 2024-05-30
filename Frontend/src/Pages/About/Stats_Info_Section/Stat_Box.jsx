import React from "react";


export default function StatBox(props) {

    const [boxCount, setBoxCount] = React.useState(0);
    const targetCount = props.count;
    const intervalTime = targetCount === 150 ? 10 : 100;

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (boxCount < targetCount)
                setBoxCount(boxCount + 1);

            else clearInterval(interval);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [boxCount, targetCount]);


    return (
        <div className={`flex flex-col items-start justify-evenly bg-[${props.color}] ${props.id === "2" ? "text-neutral-200" : "text-[#282828]"} rounded-xl font-montserrat`}>
            <h1 className="ml-6 my-6 font-bold text-3xl sm:text-xl md:text-3xl lg:text-5xl">
                {
                    props.id === "1"
                    ? (<span>{boxCount}K+</span>)
                    : (<span>{boxCount}+</span>)
                }
            </h1>

            <p className="ml-6 my-6 font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl">
                {props.description}
            </p>
        </div>
    )
}