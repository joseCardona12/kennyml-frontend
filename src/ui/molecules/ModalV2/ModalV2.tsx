"use client";
import "./modalV2.styles.scss";
import {IconClose} from "@/assets/icons";
import {useModalShoppingState} from "@/app/core/application/global-state";
interface IModalV2Props{
    children?: React.ReactNode;

}
export default function ModalV2({children}:IModalV2Props){

    const {setShowModal} = useModalShoppingState((state)=>state);

    return (
        <div className="content-modalv2">
            <div className="modalv2">
                <div className="modalv2-header">
                    <span className="header-icon" onClick={()=>setShowModal(false)}>
                        <IconClose/>
                    </span>
                </div>
                <div className="modalv2-body">
                    {children}
                </div>
            </div>
        </div>
    )
}