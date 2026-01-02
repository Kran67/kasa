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
 * Affiche la page messagerie
 * 
 * @function MessengingPage
 */
export default function MessengingPage() {
  return (
    <main className="flex flex-col gap-51 md:gap-40 w-full items-center md:pt-40 md:px-140">
      <Header activeMenu={HeaderMenuItems.Messaging} />
      <div className="flex rounded-[10]">
        <div className="flex flex-col gap-7 border-r-1 border-solid border-(--light-grey) py-11 px-8 w-376 bg-(--white) ">
          <div className="flex gap-10 py-16 px-8">
            <IconButton url="/" icon={IconButtonImages.LeftArrow} imgWidth={8} imgHeight={6} text="&nbsp;Retour" title="Retour" className="text-sm text-(--dark-grey) py-8 px-16 bg-(--light-grey) rounded-[10]" />
          </div>
          <div className="flex flex-col gap-16">
            <span className="text-[32px] text-black px-8">Messages</span>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--light-orange)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                    <span className="absolute w-6 h-6 right-0 bottom-10 text-(--main-red)">&#8226;</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--white)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                    <span className="absolute w-6 h-6 right-0 bottom-10 text-(--main-red)">&#8226;</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--white)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                    <span className="absolute w-6 h-6 right-0 bottom-10 text-(--main-red)">&#8226;</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--white)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--white)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--white)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--white)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 py-8 border-b-1 border-solid border-(--light-grey) bg-(--white)">
                <div className="flex justify-between px-10">
                  <div className="flex gap-20 items-center">
                    <div className="flex rounded-[5] w-44 h-45 bg-(--light-grey)"></div>
                    <div className="flex flex-col gap-4 w-190">
                      <span className="text-sm text-black">Utilisateur</span>
                      <span className="text-[10px] text-(--dark-grey) truncate">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between relative">
                    <span className="text-sm text-(--dark-grey) font-normal">11:04 am</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-683">
          <div className="flex flex-col gap-24 py-40 px-42">
            <div className="flex flex-col gap-24">
              <div className="flex flex-col gap-40">
                <div className="flex gap-6">
                  <div className="w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                    </div>
                    <div className="flex flex-col gap-10 bg-(--white) p-12 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-273">
                      <span className="text-xs text-(--black) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                    </div>
                    <div className="flex flex-col gap-10 bg-(--white) p-12 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-273">
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
                  <div className="flex flex-col gap-10 bg-(--main-red) p-12 rounded-ss-[20] rounded-es-[20] rounded-ee-[20] w-273">
                    <span className="text-xs text-(--white) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                  </div>
                </div>
                <div className="w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
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
                  <div className="w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                    </div>
                    <div className="flex flex-col gap-10 bg-(--white) p-12 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-273">
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
                    <div className="flex flex-col gap-10 bg-(--main-red) p-12 rounded-ss-[20] rounded-es-[20] rounded-ee-[20] w-273">
                      <span className="text-xs text-(--white) font-normal">Bonjour, votre appartement est-il disponible pour le week-end du 12 au 14 octobre ?</span>
                    </div>
                  </div>
                  <div className="w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                </div>
                <div className="flex gap-6">
                  <div className="w-28 h-28 bg-(--dark-grey) rounded-[6]"></div>
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <span className="text-[8px] text-(--dark-grey) font-normal">Utilisateur</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">&#8226;</span>
                      <span className="text-[8px] text-(--dark-grey) font-normal">11:04pm</span>
                    </div>
                    <div className="flex flex-col gap-10 bg-(--white) p-12 rounded-se-[20] rounded-es-[20] rounded-ee-[20] w-273">
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
      </div >
      <Footer />
    </main >
  );
}
