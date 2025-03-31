interface PropType {
    placeholder: string;
}

export function TextInput({
    placeholder
}: PropType
){
    return <input placeholder={placeholder} style={{ 
        padding:10,
        margin:10,
        borderColor:"black",
        borderWidth:1,
        borderStyle:"solid",
        backgroundColor:"white",
        color:"black",
    }}></input>
}