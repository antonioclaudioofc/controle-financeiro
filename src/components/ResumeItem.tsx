import { IconType } from "react-icons";

interface ResumeDescriptionProps {
    title: string,
    icon: IconType,
    value: number
}

export function ResumeItem(props: ResumeDescriptionProps) {
    return (
        <div className="flex flex-col items-center bg-white rounded-sm px-1 py-4 w-3/10 md:m-1/5 ">
            <header className="flex items-center justify-around w-full gap-3">
                <h2 className="text-xl md:text-xs">
                    {props.title}
                </h2>
                <props.icon size={20} />
            </header>
            <span className="text-3xl font-bold md:text-xl">
                {props.value}
            </span>
        </div>
    )
}
