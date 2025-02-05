"use client";
import { IconEmail, IconEye, IconLock, IconUser } from "@/assets/icons";
import "./formLogin.styles.scss";
import { Button } from "@/ui/atoms";
import { GroupInput } from "@/ui/molecules";
import { useState } from "react";
import { IFormDataLogin } from "@/app/core/application/interfaces";
import { useRouter } from "next/navigation";

export default function FormLogin(): React.ReactNode {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();
  const [formData, setFormData] = useState<IFormDataLogin>({
    email: "",
    password: "",
  });

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  return (
    <form className="form-login">
      <h2 className="login-title">
        Start session <span className="title-point">.</span>
      </h2>
      <p className="login-paragraph">
        Don't have account?{" "}
        <span
          onClick={() => router.push("/register")}
          className="paragraph-register"
        >
          Register
        </span>
      </p>
      <div className="login-content-inputs d-flex-gap">
        <GroupInput
          placeholder="@example.com"
          type="email"
          label=""
          error=""
          name="email"
          icon={<IconEmail />}
          value={formData.email}
          onChange={handleChange}
        />
        <GroupInput
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          label=""
          error=""
          name="password"
          icon={showPassword ? <IconEye /> : <IconLock />}
          onClick={toggleShowPassword}
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <Button text="Login" type="button" />
    </form>
  );
}
