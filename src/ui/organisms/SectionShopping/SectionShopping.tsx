"use client"
import {IProduct, ISelect, IShopping} from "@/app/core/application/interfaces";
import {
    Card, GroupInputImage,
    GroupInputProduct,
    GroupSelectUser,
    MessageDataNotAvailable,
    ModalV2
} from "@/ui/molecules";
import "./sectionShopping.styles.scss";
import {IconWarning} from "@/ui/organisms";
import {Button} from "@/ui/atoms";
import {IconPlus} from "@/assets/icons";
import {useModalShoppingState} from "@/app/core/application/global-state";
import {useEffect, useRef, useState} from "react";
import CloudinaryService from "@/app/infrastructure/services/cloudinary.service";

interface ISectionShoppingProps {
  shoppings: IShopping[];
  products: IProduct[];
}
export default function SectionShopping({
  shoppings,
    products
}: ISectionShoppingProps): React.ReactNode {
  console.log("shoppings", shoppings);
  const {showModal,setShowModal} = useModalShoppingState((state) => state);
  const [dataOptionsSelectedProducts, setDataOptionsSelectedProducts] = useState<ISelect[]>([]);
  const [image, setImage] = useState<string | ArrayBuffer | null>();
  const fileInputRef = useRef<HTMLInputElement>(undefined);
  const [formData, setFormData] = useState<IShopping>({
      id: 0,
      product_id: 0,
      price: "",
      createdAt: "",
      updatedAt: "",
      url_image: ""
  })


  const handleCreateShopping = async (): Promise<void> => {
      console.log("handleCreateShopping", shoppings);
      setShowModal(true) // Show modal shopping
  }

    useEffect(() => {
        const newOptions = products.map((product: IProduct, index:number)=>({
            id: index,
            name: product.id?.toString()
        }));
        setDataOptionsSelectedProducts(newOptions)
    }, [products]);
  console.log("products", products);

  const handleChangeInputFile = (e:React.ChangeEvent<HTMLInputElement>) => {
      const { name, files } = e.target;
      if(files){
          const reader = new FileReader();
          reader.onloadend = ()=>{
              setImage(reader.result); // Save image base64
          };
          reader.readAsDataURL(files[0]); // Convert image base64
      }
  }

    const handleChangeForm = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name,value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

  const handleSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
  }


    useEffect(() => {
        const fetchCloudinary = async() =>{
            console.log("image", image);
            const serviceCloudinary = await CloudinaryService.createCloudinary(image as string);
            console.log("serviceCloudinary", serviceCloudinary);
        };
        fetchCloudinary();

    }, [image]);

  return (

    <div className="section-shopping">
        <div className="shopping-create">
            <Button text={<IconPlus />} type={"button"} onClick={handleCreateShopping} />
        </div>
      {shoppings.length > 0 ? shoppings.map((item: IShopping) => (
          <Card title={`Price ${item.price}`} paragraph={`Product N: ${item.product_id}`} key={item.id} />
      )): (
          <MessageDataNotAvailable icon={<IconWarning />} message={"Not data available. Please try again later!"} />
      )}
        {showModal && <ModalV2>
            <form className={"modal-form"} onSubmit={handleSubmitForm}>
                <h2 className={"modal-title"}>Create shopping</h2>
                <div className={"form-inputs"}>
                    <GroupInputProduct multiple={false} accept={"image/*"} ref={fileInputRef} style={{display: "none"}} name={"url_image"} placeholder={""} type={"file"} value={formData.url_image} label={"Image"} onChange={handleChangeInputFile} />
                    <GroupInputImage fileInputRef={fileInputRef} text={"Select image"} />
                    <GroupInputProduct name={"price"} placeholder={""} type={"number"} value={formData.price} label={"Price"} onChange={handleChangeForm} />
                    <GroupSelectUser name={"product_id"} label={"Product"} id={"product-select"}  options={dataOptionsSelectedProducts} value={formData.product_id.toString()} onChange={handleChangeForm} width={""} />
                    <Button text={"Create"} type={"submit"} />
                </div>
            </form>
        </ModalV2>}
    </div>
  );
}
