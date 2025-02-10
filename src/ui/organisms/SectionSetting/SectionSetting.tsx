import { InfoSetting, UseCash } from "@/ui/molecules";
import "./sectionSetting.styles.scss";
import AvatarInformation from "../AvatarInformation/AvatarInformation";

export default function SectionSetting(): React.ReactNode {
  return (
    <div className="section-setting">
      <AvatarInformation />
      <InfoSetting />
      <UseCash />
    </div>
  );
}
