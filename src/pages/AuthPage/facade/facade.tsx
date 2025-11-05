import { AuthForm } from "@/widgets/auth-form";
import { UiAuthPage } from "../ui/Layout";


export const AuthPage = () => { 
    return <UiAuthPage authForm={<AuthForm />} />;
}