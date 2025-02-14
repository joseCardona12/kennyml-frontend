import { IResponse } from "@/app/core/application/dtos";
import {
  IPlace,
  IProduct,
  IStatus,
  IUnit,
} from "@/app/core/application/interfaces";
import {
  PlaceService,
  ProductService,
  StatusService,
  UnitService,
} from "@/app/infrastructure/services";
import { SectionProduct } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default async function ProductView() {
  const products = await ProductService.getAllProducts();
  const places = await PlaceService.getAllPlaces();
  const units = await UnitService.getAllUnits();
  const status = await StatusService.getAllStatus();
  if (
    places.statusCode >= 400 ||
    units.statusCode >= 400 ||
    status.statusCode >= 400 ||
    products.statusCode >= 400
  ) {
    console.log(places.message);
  }
  const productsData = products as IResponse<IProduct[]>;
  const placesData = places as IResponse<IPlace[]>;
  const unitsData = units as IResponse<IUnit[]>;
  const statusData = status as IResponse<IStatus[]>;
  return (
    <DashboardTemplateV2
      section={
        <SectionProduct
          products={productsData.data}
          places={placesData.data}
          status={statusData.data}
          units={unitsData.data}
        />
      }
      title_section="Products"
      url_image="/images/avatar_random.jpg"
    />
  );
}
