export default function Container({children}) {
    return(
        <div style={{border:"2px dashed #0070f3", padding:" 1rem", borderRadius: "10px"}}>
            {children}
        </div>
    )
}