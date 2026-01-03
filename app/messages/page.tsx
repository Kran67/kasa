import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { HeaderMenuItems, IconButtonImages, InputTypes } from "@/app/enums/enums";
import IconButton from "@/app/components/ui/IconButton";
import Input from "@/app/components/ui/Input";
import { Metadata } from "next";

/**
 * Ajout les métadata à la page
 * 
 * @function metadata
 * @returns { Metadata } - Les méta data à ajouter
 */
export const metadata: Metadata = {
  title: "Kasa - Messagerie",
  description: "Affichage des messages que vous avez reçu"
};

/**
 * Affiche la page des messages
 * 
 * @function MessagesPage
 */
export default function MessagesPage() {
  return (
    <main className="flex flex-col md:gap-40 w-full items-center bg-(--white)">
      <Header activeMenu={HeaderMenuItems.Messaging} />
      <div className="flex rounded-[10] w-full">
        <div className="flex flex-col gap-7 border-r-1 border-solid border-(--light-grey) py-11 lg:px-8 w-full lg:w-376">
          <div className="flex gap-10 py-16 px-8">
            <IconButton url="/messenging" icon={IconButtonImages.LeftArrow} imgWidth={8} imgHeight={6} text="&nbsp;Retour" title="Retour" className="text-sm text-(--dark-grey) py-8 px-16 bg-(--light-grey) rounded-[10]" />
          </div>
          <div className="flex flex-col w-full bg-(--light-orange)">
            <div className="flex flex-col gap-12 py-20 px-22">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-20">
                  <div className="flex gap-6">
                    <div className="min-w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                    <div className="flex flex-col gap-8">
                      <div className="flex gap-4">
                        <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                      </div>
                      <div className="flex flex-col gap-5 bg-(--white) p-6 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-full">
                        <span className="text-xs text-(--black) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="min-w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                    <div className="flex flex-col gap-8">
                      <div className="flex gap-4">
                        <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                      </div>
                      <div className="flex flex-col gap-10 bg-(--white) p-12 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-full">
                        <span className="text-xs text-(--black) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 justify-end">
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4 justify-end">
                      <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                    </div>
                    <div className="flex flex-col gap-10 bg-(--main-red) p-12 rounded-ss-[20] rounded-es-[20] rounded-ee-[20] w-full">
                      <span className="text-xs text-(--white) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="min-w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                <hr className="flex-1 h-1 border-(--dark-grey)" />
                <span className="text-[8px] text-(--dark-grey) font-normal">03 Septembre 2025</span>
                <hr className="flex-1 h-1 border-(--dark-grey)" />
              </div>
              <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-40">
                  <div className="flex gap-6">
                    <div className="min-w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                    <div className="flex flex-col gap-8">
                      <div className="flex gap-4">
                        <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                      </div>
                      <div className="flex flex-col gap-10 bg-(--white) p-12 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-full">
                        <span className="text-xs text-(--black) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 justify-end">
                    <div className="flex flex-col gap-8">
                      <div className="flex gap-4 justify-end">
                        <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                      </div>
                      <div className="flex flex-col gap-10 bg-(--main-red) p-12 rounded-ss-[20] rounded-es-[20] rounded-ee-[20] w-full">
                        <span className="text-xs text-(--white) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                      </div>
                    </div>
                    <div className="min-w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                  </div>
                  <div className="flex gap-6">
                    <div className="min-w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                    <div className="flex flex-col gap-8">
                      <div className="flex gap-4">
                        <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                        <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                      </div>
                      <div className="flex flex-col gap-10 bg-(--white) p-12 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-full">
                        <span className="text-xs text-(--black) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 py-21 px-30 border-t-1 border-solid border-t-(--light-grey) bg-(--white)">
              <div className="flex border border-solid border-(--light-grey) rounded-[10] h-95 relative">
                <Input name="message" type={InputTypes.Text} label="Envoyer un message" placeHolder="Envoyer un message" className="text-sm text-(--dark-grey) font-normal" />
                <IconButton
                  icon={IconButtonImages.TopArrow}
                  imgWidth={6}
                  imgHeight={8}
                  svgFill="#FFF"
                  svgStroke="#FFF"
                  title="Envoyer un message"
                  className="flex justify-center absolute right-10 bottom-10 w-32 h-32 bg-(--main-red) rounded-[5]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
