"use client";
import UtilApp from "@/app/core/application/util/utilApplication.util";
import "./sectionAccount.styles.scss";
import { IconCheckWithoutBack, IconUser } from "@/assets/icons";
import { ButtonAccount } from "@/ui/atoms";
import { AccountInfo, CardAccount } from "@/ui/molecules";
import { useRouter } from "next/navigation";

export default function SectionAccount(): React.ReactNode {
  const router = useRouter();
  const handleClick = (url: string): void => {
    router.push(`/dashboard/account/${url}`);
  };

  const handleLogOut = (): void => {
    UtilApp.removeCookies("user-credentials");
    router.push("/");
  };
  return (
    <div className="section-account">
      <AccountInfo />
      <div className="account-cards">
        <CardAccount
          icon={<IconUser />}
          title="My profile"
          description="Display name,
            phone number, email"
          onClick={() => handleClick("/my-profile")}
        />
        <CardAccount
          icon={<IconCheckWithoutBack />}
          title="Security Center"
          description="Change Password"
          onClick={() => handleClick("/security-center")}
        />
      </div>

      <ButtonAccount text="Sign out" type="button" onclick={handleLogOut} />
    </div>
  );
}
