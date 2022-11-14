import { useContext } from "react"
import { ColorContext } from "./App";
import { ProfileContext } from "./App";

export const Item = () => {
    const colorInfo = useContext(ColorContext);
    const profileInfo = useContext(ProfileContext);

    return (
        <>
            <div style={{ color: colorInfo }}>{colorInfo}</div>
            <div>{profileInfo.name}</div>
            <div>{profileInfo.age}</div>
        </>
    )
}