import "./imageSelected.styles.scss";
import {IconCheck, IconClose} from "@/assets/icons";
interface ImageSelectedProps {
    url_image:string,
    name:string,
}
export default  function ImageSelected({
    url_image,
    name,
                                       }: ImageSelectedProps):React.ReactNode{
    return (
        <div className={"image-selected"}>
            <div className={"selected"}>
                <div className={"selected-image"}>
                    <img className={"image"} src={url_image} alt={"image-selected"}/>
                </div>
                <p className={"selected-image"}>{name}</p>
            </div>
            <IconClose />
        </div>
    )
}