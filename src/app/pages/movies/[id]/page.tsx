"use client";

import DynamicPageCommentFieldContainer from "@/app/modules/Dynamic Page/application/comment field/DynamicPageCommentField.container";
import DynamicPageView from "@/app/modules/Dynamic Page/application/info field/DynamicPage.view";
import useFetchMovieById from "@/app/modules/Dynamic Page/infrastructure/useFetchMovieById";

type Props = {
  params: {
    id: number;
  };
};

export default function DynamicPageContainer({ params }: Props) {
  const { movie: data } = useFetchMovieById(params.id);
  return (
    <>
      <DynamicPageView movie={data?.data.movie} />
      <DynamicPageCommentFieldContainer movieID={params.id} />
    </>
  );
}
