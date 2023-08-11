import { ModeToggle } from "./theme-switcher";

const Navbar = () => {
    return (
        <nav className="bg-muted p-2">
            <ModeToggle />
        </nav>
    );
}

export default Navbar;