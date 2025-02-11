import { CodeService } from "@/app/infrastructure/services";
import { FormRegisterTempleate } from "@/ui/templates";

export default async function RegisterView() {
  const data = await CodeService.getAllCodes();
  if (data.statusCode >= 400) {
    return (
      <div className="content-register.view">
        <p className="register-view">Error: {data.message}</p>
      </div>
    );
  }
  console.log(data);
  return <FormRegisterTempleate data={data} />;
}
