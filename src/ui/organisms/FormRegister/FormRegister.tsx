"use client";
import "./formRegister.styles.scss";
import React, {useState } from "react";
import { GroupInput } from "@/ui/molecules";
import {
  IconEmail,
  IconEye,
  IconLock,
  IconPhone,
  IconUser,
} from "@/assets/icons";
import { Button, Modal } from "@/ui/atoms";
import { ICode, IFormDataRegister } from "@/app/core/application/interfaces";
import { useRouter } from "next/navigation";
import {
  CodeService,
  TwilioService,
} from "@/app/infrastructure/services";
import UtilApp from "@/app/core/application/util/utilApplication.util";
import { useModalState } from "@/app/core/application/global-state";

interface IFormRegisterProps {
  codes: ICode[];
}
export default function FormRegister({
  codes,
}: IFormRegisterProps): React.ReactNode {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { showModal, setShowModal } = useModalState((state) => state);
  const [formData, setFormData] = useState<IFormDataRegister>({
    name: "",
    lastName: "",
    cellphone: "",
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
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<{ message: string } | void> => {
    e.preventDefault();
    if (
      !formData.cellphone ||
      !formData.email ||
      !formData.lastName ||
      !formData.name ||
      !formData.password
    ) {
      setShowModal({
        state: true,
        message: "Is required all params",
        statusCode: 400,
      });
      return;
    }
    const randomCode = UtilApp.generateRandomNumber();
    const data = await CodeService.createCode({
      code: randomCode.toString(),
    });

    if (data.statusCode >= 400) {
      setShowModal({
        state: true,
        message: data.message,
        statusCode: data.statusCode,
      });
      return;
    }
    setShowModal({
      state: true,
      message: data.message,
      statusCode: data.statusCode,
    });
    const numberRandom = UtilApp.generateRandomNumber120();
    console.log("numberrandom", numberRandom);
    const getCode = codes.find((code: ICode) => code.id === numberRandom);

    if (!getCode?.code) {
      setShowModal({
        state: true,
        message: "Error with verification code",
        statusCode: 400,
      });
      return;
    }
    const sendMessageTwilio = await TwilioService.sendMessageTwilio({
      phone_number: `+57${formData.cellphone}`,
      code: getCode.code,
    });
    if (sendMessageTwilio.statusCode >= 400) {
      setShowModal({
        state: true,
        message: sendMessageTwilio.message,
        statusCode: sendMessageTwilio.statusCode,
      });
      return;
    }
    UtilApp.saveCookie(
      "code-user",
      JSON.stringify({
        ID: getCode.id,
        CODE: getCode.code,
        USER: formData,
      })
    );
    router.push("/verification-code");
  };
  return (
    <>
      {showModal.state ? (
        <Modal icon={<IconEye />} text={showModal.message} />
      ) : (
        <form className="form-register" onSubmit={(e) => handleSubmit(e)}>
          <p className="register-paragraph">START FOR FREE</p>
          <h2 className="register-title">
            Create new account <span className="title-point">.</span>
          </h2>
          <p className="register-paragraph">
            Have account?{" "}
            <span
              className="paragraph-login"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
          <div className="register-content-inputs d-flex-gap">
            <GroupInput
              placeholder="Name"
              type="name"
              label=""
              error={!formData.name ? "Is required Name" : ""}
              name="name"
              icon={<IconUser />}
              value={formData.name}
              onChange={handleChange}
            />
            <GroupInput
              placeholder="Last Name"
              type="text"
              label=""
              error={!formData.lastName ? "Is required LastName" : ""}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              icon={<IconUser />}
            />
            <GroupInput
              placeholder="example@gmail.com"
              type="email"
              label=""
              error={!formData.email ? "Is required Email" : ""}
              name="email"
              icon={<IconEmail />}
              value={formData.email}
              onChange={handleChange}
            />
            <GroupInput
              placeholder="+571234567890"
              type="cellphone"
              label=""
              error={!formData.cellphone ? "Is required Cellphone" : ""}
              name="cellphone"
              icon={<IconPhone />}
              value={formData.cellphone}
              onChange={handleChange}
            />
            <GroupInput
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              label=""
              error={!formData.password ? "Is required Password" : ""}
              name="password"
              icon={showPassword ? <IconEye /> : <IconLock />}
              onClick={toggleShowPassword}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button text="Create account" type="submit" />
        </form>
      )}
    </>
  );
}
