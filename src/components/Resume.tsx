import { ResumeItem } from "./ResumeItem";

export function Resume() {
    return (
        <div className="max-w-6xl w-49/50 mx-auto my-0 -mt-14 flex justify-around gap-5 ">
            <ResumeItem />
            <ResumeItem />
            <ResumeItem />
        </div>
    )
}