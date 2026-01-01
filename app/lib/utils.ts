/**
 * Prépare le corps du document html pour l'affichage de fenêtre modale, enlève la scrollbar
 * @param overflow: string - le type de débordement
 * @returns 
 */
export const prepareBodyToShowModal = (overflow: string): any => {
    document.body.style.overflow = overflow;

    return () => {
        document.body.style.overflow = "";
    };
}