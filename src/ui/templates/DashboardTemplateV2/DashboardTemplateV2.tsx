"use client";
import "./dashboardTemplateV2.styles.scss";
import { IFooterData } from "@/app/core/application/interfaces";
import {
  IconBill,
  IconBook,
  IconDashboard,
  IconProduct,
  IconSettings,
  IconShopping,
} from "@/assets/icons";
import { Title } from "@/ui/atoms";
import { FooterV2 } from "@/ui/molecules";

interface IDashboardTemplateV2Props {
  title_section: string;
  section: React.ReactNode;
  url_image: string;
}
export default function DashboardTemplateV2({
  title_section,
  section,
  url_image,
}: IDashboardTemplateV2Props): React.ReactNode {
  const dataFooter: IFooterData[] = [
    { name: "Resume", icon: <IconDashboard />, url: "/dashboard" },
    { name: "Products", icon: <IconProduct />, url: "/dashboard/product" },
    { name: "Shopping", icon: <IconShopping />, url: "/dashboard/shopping" },
    { name: "Bills", icon: <IconBill />, url: "/dashboard/bill" },
    { name: "Books", icon: <IconBook />, url: "/dashboard/book" },
    { name: "Settings", icon: <IconSettings />, url: "/dashboard/setting" },
  ];
  return (
    <div className="content-dashboard-templatev2">
      <main className="templatev2-main">
        <section className="main-section">
          <Title text={title_section} url_image={url_image} />
          {section}
        </section>
      </main>
      <FooterV2 data={dataFooter} />
    </div>
  );
}
