import "./groupInputImage.styles.scss";
import {ImageSelected} from "@/ui/atoms";


interface  IGroupInputImageProps {
    fileInputRef: React.RefObject<HTMLInputElement> | undefined;
    text: string,
}
export default  function GroupInputImage({
    fileInputRef,text
                                         }: IGroupInputImageProps) {
    const handleClickInputFile = ( ) =>{
        fileInputRef?.current?.click();
    }

    return (
        <div className={"content-group-input-image"}>
            <div className={"inputs-image"} onClick={handleClickInputFile}>
                <p className={"image-paragraph"}>{text}</p>
            </div>
            <ImageSelected url_image={"/images/avatar_random.jpg"} name={"text"}  />
        </div>
    )
}