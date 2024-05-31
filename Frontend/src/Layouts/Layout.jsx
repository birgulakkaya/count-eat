import MainLayout from "./MainLayout";
import LoginLayout from "./LoginLayout";
import { isLogin } from "../Config/isLogin";

export const Layout = isLogin ? LoginLayout : MainLayout;
