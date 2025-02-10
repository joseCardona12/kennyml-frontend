"use client";
import { Button, Input, Modal } from "@/ui/atoms";
import "./formVerificationCode.styles.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IDataCookie,
  IVerificationForm,
} from "@/app/core/application/interfaces";
import UtilApp from "@/app/core/application/util/utilApplication.util";
import { useModalState } from "@/app/core/application/global-state";
import { IconEye } from "@/assets/icons";
import { AuthService } from "@/app/infrastructure/services";
import { useRouter } from "next/navigation";
import { IRegisterResponse } from "@/app/core/application/dtos";

export default function FormVerificationCode(): React.ReactNode {
  const router = useRouter();
  const [time, setTime] = useState<number>(60);
  const [codeCookie, setCodeCookie] = useState<string | null>(null);
  const { showModal, setShowModal } = useModalState((state) => state);
  const [formData, setFormData] = useState<IVerificationForm>({
    numberOne: "",
    numberTwo: "",
    numberThree: "",
    numberFour: "",
    numberFive: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const cookieComplet = `${formData.numberOne}${formData.numberTwo}${formData.numberThree}${formData.numberFour}${formData.numberFive}`;
    const { CODE, ID, USER } = JSON.parse(codeCookie!) as IDataCookie;
    console.log("Data", CODE, ID, USER);
    if (CODE !== cookieComplet) {
      setShowModal({
        state: true,
        message: "Incorrect code, try again!",
        statusCode: 400,
      });
      return;
    }
    setShowModal({
      state: true,
      message: "Verify code success",
      statusCode: 200,
    });

    const data = await AuthService.register({
      name: USER.name,
      lastName: USER.lastName,
      cellphone: USER.cellphone,
      email: USER.email,
      password: USER.password,
      codeConnection: ID.toString(),
    });
    if (data.statusCode >= 400) {
      setShowModal({
        state: true,
        message: data.message,
        statusCode: data.statusCode,
      });
      return;
    }
    const dataUser = data as IRegisterResponse;
    setShowModal({
      state: true,
      message: data.message,
      statusCode: data.statusCode,
    });
    UtilApp.removeCookies("code-user");
    UtilApp.saveCookie("user-credentials-register", JSON.stringify(dataUser));
    router.push("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (/^\d*$/.test(value) && value.length <= 1) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleClickResend = (): void => {
    setTime(60);
  };

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  useEffect(() => {
    const cookieValue = UtilApp.getCookies("code-user");
    if (!cookieValue) {
      setShowModal({
        state: true,
        message: "Error to get cookie",
        statusCode: 400,
      });
      return;
    }
    setCodeCookie(cookieValue);
  }, []);
  return (
    <>
      {showModal.state ? (
        <Modal text={showModal.message} icon={<IconEye />} />
      ) : (
        <form className="form-verification-code" onSubmit={handleSubmit}>
          <h2 className="verification-code-title">Enter the code</h2>
          <div className="verification-code-inputs">
            <Input
              name="numberOne"
              placeholder=""
              type="text"
              value={formData.numberOne}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
            />
            <Input
              name="numberTwo"
              placeholder=""
              type="text"
              value={formData.numberTwo}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
            />
            <Input
              name="numberThree"
              placeholder=""
              type="text"
              value={formData.numberThree}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
            />
            <Input
              name="numberFour"
              placeholder=""
              type="text"
              value={formData.numberFour}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
            />
            <Input
              name="numberFive"
              placeholder=""
              type="text"
              value={formData.numberFive}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
            />
          </div>
          {time > 0 ? (
            <p className="verification-time">Resend code is {time}</p>
          ) : (
            <p className="verification-time-click" onClick={handleClickResend}>
              Resend code now
            </p>
          )}
          <Link className="verification-link" href={"/register"}>
            Back to register
          </Link>
          <Button text="Verify" type="submit" />
        </form>
      )}
    </>
  );
}
