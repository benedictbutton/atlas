type AnswersObject =
  | {
      [key: string]: boolean | null | number | undefined;
    }
  | (() => { [key: string]: boolean | null | number | undefined });

type CountryProps = {
  zoomIn: string;
  handleZoom: (
    event:
      | {
          currentTarget: { id: SetStateAction<string> };
          target: SVGGElement;
        }
      | MouseEvent<SVGGElement>,
    close: string | undefined,
  ) => void;
  countryId: string;
  answers: { [key: string]: null | number };
};

type BodyPartProps = {
  // answers: { [key: string]: null | number };
  bone?: string;
  zoomIn?: string;
  handleZoom: (
    e: React.MouseEvent<SVGGElement | HTMLButtonElement>,
    close?: string | undefined,
  ) => void;
  className?: string;
};
