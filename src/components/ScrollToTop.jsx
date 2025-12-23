import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation(); // listens to route changes

    useEffect(() => {
        // ✅ Scroll to top smoothly whenever route changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    },
        [pathname]
    );

    return null; // does not render anything
}
