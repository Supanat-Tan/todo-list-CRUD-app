import "../../styles/overlay.css"
import type React from "react"

interface OverlayProps {
    isVisible: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, setShowForm }) => {
    const handleClick = () => {
        setShowForm(prev => !prev)
    }
  return (
    <div onClick={handleClick} className={`overlay ${isVisible? "show" : "hide"}`}></div>
  )
}

export default Overlay