import "./settingsTemplate.styles.scss";
import { IconGithub } from "@/assets/icons";
import { Footer } from "@/ui/molecules";
import { FormUser, Header } from "@/ui/organisms";
import AvatarInformation from "@/ui/organisms/AvatarInformation/AvatarInformation";

export default function SettingsTemplate(): React.ReactNode {
  return (
    <div className="content-settings">
      <Header />
      <main className="settings-main">
        <section className="main-section">
          <AvatarInformation />
          <FormUser />
        </section>
      </main>
      <Footer
        nameCompany="Vardesign"
        city="Medellín"
        department="Antioquia"
        textLink="GO my Github repository"
        url_repository="https://github.com/joseCardona12"
        icon={<IconGithub />}
      />
    </div>
  );
}
