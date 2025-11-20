import NavBar from "../components/nav-bar";

export default function NavBarDemo() {
    return (
        <NavBar
        tabs={[
            {label: "Components", href: "/components"},
            {label: "Blogs", href: "/blog"},
            {label: "Home", href: "/"},
        ]}
        colors={[
            "#FF0080", // Vivid Pink
            "#FFDE00", // Vivid Yellow
            "#32FF7A", // Neon Green
            "#00CFFF", // Bright Blue
            "#FF3D00", // Vibrant Orange-Red
            "#FF61A6", // Disco Pink
            "#8A2BE2", // Blue Violet
            "#FFD300", // Bright Gold
            "#FF6F00", // Vivid Orange
            "#21D4FD", // Light Neon Blue
            "#A259FF", // Purple
            "#FEE440", // Disco Yellow
            "#00FFB0", // Neon Aqua
            "#FD5E53", // Disco Coral
            "#46C3DB"  // Cyan
        ]}
        />  
    )
}