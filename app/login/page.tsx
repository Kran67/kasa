import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { InputTypes } from "@/app/enums/enums";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Link from "@/app/components/ui/Link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasa - Se connecter",
  description: "Se connecter au site kasa"
};

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-40 w-full items-center px-16 md:pt-40 md:px-140 h-screen justify-between">
      <meta title="" />
      <Header />
      <form className="flex flex-col gap-38 py-32 px-16 md:p-80 bg-(--white) border border-solid border-(--light-grey) rounded-[10px] items-center md:w-742">
        <div className="flex flex-col gap-8 items-center">
          <span className="text-2xl md:text-[32px] text-(--main-red) font-bold">Heureux de vous revoir</span>
          <span className="text-sm text-(--black) font-normal text-center md:w-390">Connectez-vous pour retrouver vos réservations, vos annonces et tout ce qui rend vos séjours uniques.</span>
        </div>
        <div className="flex flex-col gap-22 w-326 md:w-360">
          <Input label="Adresse email" name="email" type={InputTypes.Text} required={true} />
          <Input label="Mot de passe" name="password" type={InputTypes.Password} required={true} />
        </div>
        <div className="flex flex-col gap-22 w-326 md:w-360 items-center">
          <Button text="Se connecter" url='/' className="flex justify-center bg-(--main-red) rounded-[10] p-8 px-32 text-(--white) md:w-230" />
          <div className="flex flex-col gap-12 w-full items-center">
            <Link className="text-sm text-(--main-red) font-normal text-center" url="/" text="Mot de passe oublié" />
            <div className="text-sm text-(--main-red) font-normal text-center">
              <span >Pas encore de compte ? </span>
              <Link className="font-medium" url="/signin" text="Inscrivez-vous" />
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </main>
  );
}
