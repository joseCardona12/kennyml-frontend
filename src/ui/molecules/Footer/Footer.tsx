import { ReactElement } from "react";
import "./footer.styles.scss";
import Link from "next/link";

interface IFooterProps {
  nameCompany: string;
  city: string;
  department: string;
  url_repository: string;
  textLink: string;
  icon: ReactElement;
}
export default function Footer({
  nameCompany,
  city,
  department,
  url_repository,
  textLink,
  icon,
}: IFooterProps): React.ReactNode {
  return (
    <footer className="footer">
      <hr />
      <p className="footer-paragraph">
        © 2025 {nameCompany} - Todos los derechos reservados, {city} |{" "}
        {department}
        <Link
          href={url_repository}
          className="paragraph-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="link-icon">{icon}</span>
          {textLink}
        </Link>
      </p>
    </footer>
  );
}
