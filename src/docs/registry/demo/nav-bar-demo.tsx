import NavBar from "../components/nav-bar";

export default function NavBarDemo() {
    return (
        <NavBar
        tabs={[
            {label: "Components", href: "#"},
            {label: "Blogs", href: "#"},
            {label: "Home", href: "#"},
        ]}
        colors={[
            "#FF0765", // Vivid Pink
         
        ]}
        />  
    )
}