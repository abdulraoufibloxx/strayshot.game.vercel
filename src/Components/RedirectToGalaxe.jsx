import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RedirectToGalaxe() {
    const navigate = useNavigate();

    useEffect(() => {
        window.location.href="https://galxe.com/45WJYapKSJeT93QKj7ofT5"
    }, [navigate]);

    return null
   
}

export default RedirectToGalaxe