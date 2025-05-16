import { getMovieUrls } from "./getMovieUrls";
import { Page } from "./Page";

export const AppTest = () => {

  const { en: urlEn, es: urlEs } = getMovieUrls();

  return (
    <>
      <Page url={urlEn}></Page>

      <br />
      <hr />
      <Page url={urlEs}></Page>


    </>
  );
};