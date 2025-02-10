import { ICodeResponseError } from "@/app/core/application/dtos";
import { ICodeResponse } from "@/app/core/application/dtos/code.response.dto";
import { FormRegister } from "@/ui/organisms";

interface IFormRegisterTemplateProps {
  data: ICodeResponse | ICodeResponseError;
}
export default function FormRegisterTempleate({
  data,
}: IFormRegisterTemplateProps): React.ReactNode {
  const dataConvert = data as ICodeResponse;
  return (
    <div className="content-form">
      <FormRegister codes={dataConvert.codes} />
    </div>
  );
}
