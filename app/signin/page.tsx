import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { InputTypes } from "@/app/enums/enums";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import Link from "@/app/components/ui/Link";
import Checkbox from "@/app/components/ui/Checkbox";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasa - S'enregister",
  description: "Devenir utlisateur enregistré"
};

export default function SigninPage() {
  return (
    <main className="flex flex-col gap-40 w-full items-center px-16 md:pt-40 md:px-140 h-screen justify-between">
      <Header />
      <form className="flex flex-col gap-38 py-32 px-16 md:p-80 bg-(--white) border border-solid border-(--light-grey) rounded-[10px] items-center md:w-742">
        <div className="flex flex-col gap-8 items-center">
          <span className="text-2xl md:text-[32px] text-(--main-red) font-bold px-50 md:px-0">Rejoignez la communauté Kasa</span>
          <span className="text-sm text-(--black) font-normal text-center md:w-488">Créez votre compte et commencez à voyager autrement : réservez des logements uniques, découvrez de nouvelles destinations et partagez vos propres lieux avec d’autres voyageurs.</span>
        </div>
        <div className="flex flex-col gap-22 w-326 md:w-360">
          <Input label="Nom" name="lastname" type={InputTypes.Text} required={true} />
          <Input label="Prénom" name="firstname" type={InputTypes.Text} required={true} />
          <Input label="Adresse email" name="email" type={InputTypes.Text} required={true} />
          <Input label="Mot de passe" name="password" type={InputTypes.Password} required={true} />
          <div className="flex text-xs text-(--dark-grey)">
            <Checkbox id="readed-generals-conditions" text="J’accepte les" className="text-xs" />
            <span className="ml-3 underline">conditions générales d’utilisation</span>
          </div>
        </div>
        <div className="flex flex-col gap-22 w-326 md:w-360 items-center">
          <Button text="S’inscrire" url='/' className="flex justify-center bg-(--main-red) rounded-[10] p-8 px-32 text-(--white) md:w-230" />
          <div className="flex flex-col gap-12 w-full items-center">
            <div className="text-sm text-(--main-red) font-normal text-center">
              <span >Déjà membre ? </span>
              <Link className="font-medium" url="/login" text="Se connecter" />
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </main>
  );
}
