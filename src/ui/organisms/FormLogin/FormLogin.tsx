"use client";
import { IconEmail, IconEye, IconLock } from "@/assets/icons";
import "./formLogin.styles.scss";
import { Button, Modal } from "@/ui/atoms";
import { GroupInput } from "@/ui/molecules";
import React, { useState } from "react";
import { IFormDataLogin } from "@/app/core/application/interfaces";
import { useRouter } from "next/navigation";
import { useModalState } from "@/app/core/application/global-state";
import { AuthService } from "@/app/infrastructure/services";
import { ILoginResponse } from "@/app/core/application/dtos";
import UtilApp from "@/app/core/application/util/utilApplication.util";

export default function FormLogin(): React.ReactNode {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { showModal, setShowModal } = useModalState((state) => state);
  const router = useRouter();
  const [formData, setFormData] = useState<IFormDataLogin>({
    email: "",
    password: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setShowModal({
        state: true,
        message: "Is required all params",
        statusCode: 400,
      });
      return;
    }

    const data = await AuthService.login(formData);
    if (data.statusCode >= 400) {
      setShowModal({
        state: true,
        message: data.message,
        statusCode: data.statusCode,
      });
      return;
    }
    const dataResponseSuccess = data as ILoginResponse;
    setShowModal({
      state: true,
      message: data.message,
      statusCode: data.statusCode,
    });
    UtilApp.saveCookie(
      "user-credentials",
      JSON.stringify(dataResponseSuccess)
    );
    router.push("/dashboard");
  };

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
    <>
      {showModal.state ? (
        <Modal text={showModal.message} icon={<IconEye />} />
      ) : (
        <form className="form-login" onSubmit={handleSubmit}>
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
          <Button text="Login" type="submit" />
        </form>
      )}
    </>
  );
}
