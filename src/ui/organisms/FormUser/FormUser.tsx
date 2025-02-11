"use client";
import { Button, Title } from "@/ui/atoms";
import { GroupTextAreaUser } from "@/ui/molecules";
import "./formUser.styles.scss";
import { ISelect } from "@/app/core/application/interfaces";
import GroupInpuUser from "@/ui/molecules/GroupInputUser/GroupInputUser";
import { IconEye, IconUpdate } from "@/assets/icons";

export default function FormUser(): React.ReactNode {
  // const dataSelectTypeDocument: ISelect[] = [
  //   { value: "ti", text: "TI" },
  //   { value: "cc", text: "CC" },
  // ];
  return (
    <div className="content-form-user">
      <Title text="Your data" />
      <form className="user-info">
        <GroupInpuUser
          label="Name"
          name="name"
          onChange={() => console.log("change")}
          placeholder=""
          type="text"
          error=""
          value="jose"
          border=""
          icon={<IconUpdate />}
          onClick={() => console.log("click")}
        />

        <GroupInpuUser
          label="Last Name"
          name="lastName"
          onChange={() => console.log("change")}
          placeholder=""
          type="text"
          error=""
          value="cardona"
          border=""
          icon={<IconUpdate />}
          onClick={() => console.log("click")}
        />
        <GroupInpuUser
          label="Email"
          name="email"
          onChange={() => console.log("change")}
          placeholder=""
          type="text"
          error=""
          value="jose@gmail.com"
          border=""
          icon={<IconUpdate />}
          onClick={() => console.log("click")}
        />
        <GroupInpuUser
          label="Phone"
          name="cellphone"
          onChange={() => console.log("change")}
          placeholder=""
          type="text"
          error=""
          value="3006233410"
          border=""
          icon={<IconUpdate />}
          onClick={() => console.log("click")}
        />

        <GroupInpuUser
          label="DNum"
          name="document_number"
          onChange={() => console.log("change")}
          placeholder=""
          type="text"
          error=""
          value="123123"
          border=""
          icon={<IconUpdate />}
          onClick={() => console.log("click")}
        />

        <GroupInpuUser
          label="Address"
          name="address"
          onChange={() => console.log("change")}
          placeholder=""
          type="text"
          error=""
          value="cr49 #111"
          border=""
          icon={<IconUpdate />}
          onClick={() => console.log("click")}
        />

        <GroupInpuUser
          label="Password"
          name="password"
          onChange={() => console.log("change")}
          placeholder=""
          type=""
          error=""
          value="23123"
          border=""
          icon={
            <span style={{ display: "flex", gap: "var(--padding-small)" }}>
              <IconEye />
              <IconUpdate />
            </span>
          }
          onClick={() => console.log("click")}
        />
        <GroupTextAreaUser
          id=""
          label="About me"
          name=""
          onChange={() => console.log("change")}
          placeholder="..."
          value=""
          border=""
        />
        <Button text="Send data" type="submit" />
      </form>
    </div>
  );
}
