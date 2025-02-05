"use client";
import "./formRegister.styles.scss";
import React, { useState } from "react";
import { GroupInput } from "@/ui/molecules";
import { IconEmail, IconEye, IconLock, IconUser } from "@/assets/icons";
import { Button } from "@/ui/atoms";
import { IFormDataRegister } from "@/app/core/application/interfaces";
import { useRouter } from "next/navigation";

export default function FormRegister(): React.ReactNode {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormDataRegister>({
    name: "",
    birhtDate: "",
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
    <form className="form-register">
      <p className="register-paragraph">START FOR FREE</p>
      <h2 className="register-title">
        Create new account <span className="title-point">.</span>
      </h2>
      <p className="register-paragraph">
        Have account?{" "}
        <span className="paragraph-login" onClick={() => router.push("/login")}>
          Login
        </span>
      </p>
      <div className="register-content-inputs d-flex-gap">
        <GroupInput
          placeholder="example"
          type="name"
          label=""
          error=""
          name="name"
          icon={<IconUser />}
          value={formData.name}
          onChange={handleChange}
        />
        <GroupInput
          placeholder="YYYY-MM-DD"
          type="date"
          label=""
          error=""
          name="birhtDate"
          value={formData.birhtDate}
          onChange={handleChange}
        />
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
      <Button text="Create account" type="button" />
    </form>
  );
}
