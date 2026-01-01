import { getLodging } from "@/app/api/api";
import { Lodging } from "@/app/interfaces/lodging";
import { ResolvingMetadata, Metadata } from "next";
import { redirect, RedirectType } from "next/navigation";
import Property from "./property";


type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props,
  parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;
  // on va chercher les information de la propriété
  const lodging: Lodging | any = await getLodging(slug);
  return {
    title: `kasa - ${lodging.title}`,
    description: lodging.description,
    openGraph: {
      type: 'article',
      images: [lodging.cover],
    },
  }
}

/**
 * Affiche les détails d'une propriété
 * 
 * @async
 * @function PropertyPage
 * @param { params: Promise<{ slug: string }> } params - Identifiant de la propriété sous forme de Promise
 */
export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  // on récupère le paramétre slug (identifiant de la propriété)
  const slug = (await params).slug;
  // on va chercher la propriété
  const { lodging, error } = await getLodging(slug);
  // si le propriété n'a pas été trouvée, on redirige vers la page 404
  if (lodging?.error || error) {
    redirect("/404", RedirectType.push);
  }

  return <Property slug={slug} />
}