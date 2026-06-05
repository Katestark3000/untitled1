type PropText = {
    text: string,
    onClick?: () => void,
    className?: string,
}
export default function Buttons({ text, onClick, className }: PropText){
    return (
        <button onClick={onClick}
        className={className}> {text} </button>
    )
}