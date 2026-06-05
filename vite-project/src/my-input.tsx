type PropsInput = {
    value: string;
    onChange: (value: string) => void;
}

export default function Input({value, onChange}: PropsInput) {
    return (
        <input className="my-input" value={value} onChange= { (event) => onChange(event.target.value)}/>
    )
}