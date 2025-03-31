interface TextInputProps {
    size?: "big" | "small";
    placeholder?: string;
    value?: string;  // Ensure this exists
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Ensure this exists
  }
  
  export function TextInput({
    placeholder,
    size,
    value,
    onChange,
}: TextInputProps) {
    return (
        <input 
            placeholder={placeholder}
            value={value} // ✅ Add value
            onChange={onChange} // ✅ Add onChange
            style={{ 
                padding: size === "big" ? 20 : 10,
                margin: size === "big" ? 20 : 10,
                borderRadius: 5,
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid",
                backgroundColor: "white",
                color: "black",
            }} 
        />
    );
}
