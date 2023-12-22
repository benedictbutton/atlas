// type AnswersObject =
//   | {
//       [key: string]: boolean | null | number | undefined;
//     }
//   | (() => { [key: string]: boolean | null | number | undefined });

type AnswersObject = {
  [key: string]: null | number | undefined;
};

type ProfileProps = {
  profileIcon: string;
  iconSize: string;
  textColor: string;
  menuItemLink: string;
  menuItemName: string;
  menuItemColor: string;
  zoomIn: string;
};

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
  answers: AnswersObject;
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
  classNameBones?: string;
  classNameDiagram?: string;
};

type BodyLabelProps = {
  zoomIn: string;
  className: string;
  answers: AnswersObject;
};
