type SelectProps = {
    value: string,
    selectedOptions: Array<{ value: string; name: string }>,
    onChange: (value: string) => void,

}

export default function MySelect({selectedOptions, onChange, value}: SelectProps) {
    return (
        <select value={value}
                onChange={(e) => onChange(e.target.value)}>
            {selectedOptions.map((option) => (
                <option key={option.value}
                        value={option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    )
}