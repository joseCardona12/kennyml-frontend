import { deleteCookie, setCookie } from "cookies-next";
import { getCookie } from "cookies-next/client";

class UtilApp {
  public static generateRandomNumber(): number {
    return Math.floor(10000 + Math.random() * 90000);
  }

  public static generateRandomNumber120(): number {
    return Math.floor(Math.random() * 121);
  }

  public static saveCookie(key: string, value: string): void {
    setCookie(key, value);
  }

  public static getCookies(key: string) {
    const cookie = getCookie(key);
    if (!cookie) return "Erro to get cookie";
    return JSON.parse(cookie);
  }

  public static removeCookies(key: string): void {
    deleteCookie(key);
  }
}

export default UtilApp;
