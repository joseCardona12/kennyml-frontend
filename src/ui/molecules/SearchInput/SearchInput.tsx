"use client";
import "./searchInput.styles.scss";
import { IconSearch } from "@/assets/icons";
import { Input } from "@/ui/atoms";
import { useState } from "react";

export default function SearchInput(): React.ReactNode {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
  };
  return (
    <div className="content-search-input">
      <span className="input-icon">
        <IconSearch />
      </span>
      <Input
        name="searchInput"
        placeholder="Search task..."
        type="text"
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  );
}
