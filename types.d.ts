type AnswersObject =
  | {
      [key: string]: boolean | null | number | undefined;
    }
  | (() => { [key: string]: boolean | null | number | undefined });

type BodyPartProps = {
  answers: { [key: string]: null | number };
  bone: string;
  zoomIn: string;
  handleZoom: (
    e: React.MouseEvent<SVGGElement | HTMLButtonElement>,
    close?: string | undefined,
  ) => void;
  className: string;
};
