import {
  useState,
  useRef,
  useMemo,
  useCallback,
  SetStateAction,
} from 'react';
import { debounce } from 'lodash';
import useZoom from '../utils/useZoom';
import LeftArm from './BodyParts/LeftArm';
import CloseButton from './Input/Close';
import Input from './Input/Input';
import LeftHand from './BodyParts/LeftHand';
import Profile from './Profile';
import BackFoot from './BodyParts/BackFoot';
import BodyLabels from './BodyLabels';
import ClavicleLeft from './BodyParts/ClavicleLeft';
import ClavicleRight from './BodyParts/ClavicleRight';
import Face from './BodyParts/Face';
import InnerEar from './BodyParts/InnerEar';
import Ischium from './BodyParts/Ischium';
import LeftFoot from './BodyParts/LeftFoot';
import LeftLeg from './BodyParts/LeftLeg';
import RightArm from './BodyParts/RightArm';
import RightFoot from './BodyParts/RightFoot';
import RightHand from './BodyParts/RightHand';
import RightLeg from './BodyParts/RightLeg';
import Pelvis from './BodyParts/Pelvis';
import Skull from './BodyParts/Skull';
import UpperBody from './BodyParts/UpperBody';
import { boneData, boneValues } from '../data/bones';
import armStyles from '../styles/Arm.module.css';
import faceStyles from '../styles/Face.module.css';
import footStyles from '../styles/Foot.module.css';
import handStyles from '../styles/Hand.module.css';
import innerEarStyles from '../styles/InnerEar.module.css';
import legStyles from '../styles/Leg.module.css';
import pelvisStyles from '../styles/Pelvis.module.css';
import skullStyles from '../styles/Skull.module.css';
import upperBodyStyles from '../styles/UpperBody.module.css';
import useAnswers from '../utils/useAnswers';

export type DatasetInjector<T, D extends DOMStringMap> = T & {
  dataset: D;
};

const HumanBones = () => {
  const initializeBoneAnswers = () => {
    const initialAnswers: {
      [key: string]: null;
    } = {};
    Object.keys(boneData).map((key) => (initialAnswers[key] = null));
    return initialAnswers;
  };
  const [regionHeader, zoomIn, setZoomIn] = useZoom();
  const { answers, setAnswers, createGame, handleSaveGame, game } =
    useAnswers(initializeBoneAnswers());
  const [bone, setBone] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const formInput = useRef<HTMLInputElement | null>(null);
  const total = 206;

  const handleZoom = (
    e:
      | {
          currentTarget: { id: SetStateAction<string> };
          target: SVGGElement;
        }
      | React.MouseEvent<SVGGElement | HTMLButtonElement>,
    close: string | undefined,
  ): void => {
    if (!zoomIn) setZoomIn(e.currentTarget.id);
    else if (
      bone ===
      (((e.target as SVGGElement).dataset as DOMStringMap)
        .bone as SetStateAction<string>)
    )
      setBone('');
    else if (close) {
      setBone('');
      setZoomIn('');
    } else if (!bone || !close)
      setBone(
        ((e.target as SVGGElement).dataset as DOMStringMap)
          .bone as SetStateAction<string>,
      );
    else {
      setBone('');
      setZoomIn('');
    }
  };

  const handleSearchValue = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>): void => {
        let word = event.target.value;
        let capitalizedWord =
          word.charAt(0).toUpperCase() + word.slice(1);
        setSearchValue(capitalizedWord);
      }, 300),
    [],
  );

  const handleSelectValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(() => event.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (bone !== searchValue)
        setAnswers({ ...answers, [`${bone}`]: -1 });
      else
        setAnswers({
          ...answers,
          [`${bone}`]: boneData[`${bone}`].points,
        });
      setBone('');
      setSearchValue('');
      if (formInput.current) formInput.current.value = '';
    },
    [searchValue, bone, setAnswers, answers],
  );

  const handleResetAnswers = useCallback(() => {
    setBone('');
    setSearchValue('');
    if (formInput.current) formInput.current.value = '';

    const resetAnswers: AnswersObject = {};
    const countries = Object.keys(answers);
    countries.map((country) => {
      resetAnswers[country] = null;
      return resetAnswers;
    });

    setAnswers({ ...answers, ...resetAnswers });
  }, [answers, setAnswers]);

  return (
    <>
      <Profile
        profileIcon="/ventruvian.svg"
        iconSize="50px"
        textColor="white"
        menuItemLink="/map"
        menuItemName="Map"
        menuItemColor="text-[#80b6ec]"
        zoomIn={zoomIn}
      />
      {zoomIn && <CloseButton handleZoom={handleZoom} />}
      <Input
        searchValue={searchValue}
        handleSearchValue={handleSearchValue}
        handleSelectValue={handleSelectValue}
        zoomIn={zoomIn}
        handleSubmit={handleSubmit}
        answers={answers}
        setAnswers={setAnswers}
        cribData={boneValues}
        regionHeader={regionHeader}
        labelName={bone}
        labelType="bone"
        labelPlural="Bones"
        game={game}
        createGame={createGame}
        handleSaveGame={handleSaveGame}
        handleResetAnswers={handleResetAnswers}
        forwardRef={(el: HTMLInputElement) =>
          (formInput.current = el)
        }
        total={total}
      />
      <svg
        overflow="visible"
        version="1.0"
        width="100%"
        height="100%"
        viewBox="0 0 435.69 841.89"
        xmlns="http://www.w3.org/2000/svg"
        // preserveAspectRatio="xMinYMin"
        // preserveAspectRatio="none"
      >
        <metadata>
          {/* <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
          </cc:Work>
        </rdf:RDF> */}
        </metadata>

        {/* <g>
          <rect width="435.69" height="841.89" fill="#fff" />
        </g> */}
        <g
          style={{
            fillOpacity: zoomIn ? '0.2' : '1',
          }}
        >
          <RightArm handleZoom={handleZoom} />
          {zoomIn !== 'foot' && (
            <RightFoot
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={footStyles.front_foot__zoom__out}
            />
          )}
          {zoomIn !== 'foot' && (
            <BackFoot
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
            />
          )}
          {zoomIn !== 'foot' && (
            <LeftFoot
              answers={answers}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={footStyles.left_foot__zoom__out}
            />
          )}
          {zoomIn !== 'hand' && (
            <RightHand
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={handStyles.hand__zoom__out}
            />
          )}
          {zoomIn !== 'arm' && (
            <LeftArm
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={armStyles.arm__zoom__out}
            />
          )}
          {zoomIn !== 'upperBody' && (
            <UpperBody
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={upperBodyStyles.upper_body__zoom__out}
            />
          )}
          <ClavicleRight />
          {zoomIn !== 'arm' && (
            <ClavicleLeft
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={pelvisStyles.pelvis__zoom__out}
            />
          )}
          {zoomIn !== 'pelvis' && (
            <Ischium
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={pelvisStyles.pelvis__zoom__out}
            />
          )}
          {zoomIn !== 'leg' && (
            <LeftLeg
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={legStyles.leg__zoom__out}
            />
          )}
          {zoomIn !== 'leg' && <RightLeg handleZoom={handleZoom} />}
          {zoomIn !== 'pelvis' && (
            <Pelvis
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={pelvisStyles.pelvis__zoom__out}
            />
          )}
          {zoomIn !== 'upperBody' && (
            <g
              style={{
                display:
                  (answers['cervical vertebrae'] ?? 0) < 1 ||
                  (zoomIn && zoomIn !== 'upperBody')
                    ? 'none'
                    : '',
              }}
            >
              <polyline
                className={upperBodyStyles.upper_body__zoom__out}
                points="85.795 115.27 145.53 115.27 145.53 96.547 200.77 96.547"
                fill="none"
                stroke="#003cff"
                stroke-width=".546"
              />
            </g>
          )}
          {zoomIn !== 'face' && (
            <Face
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={faceStyles.face__zoom__out}
            />
          )}
          {zoomIn !== 'skull' && zoomIn !== 'inner_ear' && (
            <>
              <InnerEar
                bone={bone}
                zoomIn={zoomIn}
                handleZoom={handleZoom}
                classNameBones={
                  innerEarStyles.inner_ear_bones__zoom__out
                }
                classNameDiagram={
                  innerEarStyles.inner_ear_diagram__zoom__out
                }
              />
              <Skull
                bone={bone}
                zoomIn={zoomIn}
                handleZoom={handleZoom}
                className={skullStyles.skull__zoom__out}
              />
            </>
          )}
          <path
            d="m282.67 186.58c-1.676 0.201-3.191 0.351-4.812 0.048 0.172 0.125 0.486 0.517 0.707 0.704-0.725 0.186-1.733 0.439-2.332 0.925-1.366 1.106-0.387 0.743-1.107 2.335-1.723 3.8-4.822 8.021-7.386 11.318 2.275-1.542 4.248-4.403 6.15-6.424 1.5-1.593 2.95-3.27 4.474-4.821 0.961-0.981 4.646-3.311 3.77-4.352"
            fill="#ccb25c"
          />

          <path
            d="m194.52 324.34c0.168-0.519 0.202-1.443 0.021-1.939-0.12 0.621-0.393 1.146-0.549 1.74 0.237 0.113 0.445 0.27 0.618 0.467"
            fill="#dcc06d"
          />

          <g>
            <path
              d="m131.41 173.97c1.649 2.329 0.819 6.103 0.14 8.583-0.339 1.238-1.075 2.598-1.924 3.576-0.549 0.632-2.985 1.847-1.661 2.656 4.049-2.857 6.182-11.225 3.686-15.543 0.114-0.027 0.319-0.043 0.418-0.058-0.47-0.9-1.167-1.552-1.837-2.237 0.528 1.406 1.007 2.954 1.716 4.276"
              fill="#ccb25c"
            />
          </g>
          <LeftHand handleZoom={handleZoom} />
          <RightLeg handleZoom={handleZoom} />
          {/* <g id="sternum">
            <path
              d="m200.78 240.43c0.093 0.889 0.316 1.691 1.074 2.154 2.649 1.624 3.622-1.784 3.976-3.765 0.379-2.131 1.868-6.595 0.904-8.641-0.363-0.773-1.286-0.795-1.474-1.939-0.124-0.751 0.064-1.633 0.546-2.229 0.627-0.774 1.245-0.388 2.077-0.436 1.109-0.064 1-0.369 0.942-1.277-0.042-0.695-0.104-1.559 0.022-2.239 0.125-0.689 0.65-1.183 0.936-1.807 0.375-0.818-0.307-1.175-0.591-1.822-0.296-0.674-0.269-1.636 0.237-2.199 0.478-0.534 1.403-0.26 1.636-0.781 0.113-0.255-0.068-1.099-9e-3 -1.455 0.092-0.521 0.229-0.995 0.367-1.503 0.077-0.28 0.377-0.876 0.361-1.157-0.033-0.535-0.48-0.687-0.783-1.038-0.324-0.378-0.527-0.827-0.641-1.325-0.274-1.213-0.11-2.632 0.881-3.448 0.164-0.136 0.595-0.298 0.695-0.47 0.281-0.49-0.269-1.274-0.341-1.834-0.175-1.393 0.906-3.735-0.158-4.782-0.94-0.924-1.414-3.075-0.91-4.309 0.364-0.891 0.539-1.203 1.251-1.902 0.634-0.622 0.207-2.454 0.177-3.285-0.036-0.995-0.375-1.928-0.103-2.927 0.083-0.309 1.66-2.689 1.772-2.44-0.731-1.614-1.819-1.861-1.762-3.893 0.032-1.128 0.928-2.215 0.322-3.353-1.197-2.244-6.522-2.594-8.596-2.564-3.132 0.046-5.908 0.74-8.288 2.512-0.292 0.219-0.182 2.801-0.262 3.333-0.174 1.165-0.239 2.364-1.562 2.79-0.248 0.841 0.37 0.936 0.639 1.576 0.569 1.355 0.887 2.753 1.017 4.215 0.083 0.94-0.425 2.329-0.127 3.165 0.33 0.925 1.102 1.132 1.094 2.331-7e-3 1.1-0.629 2.524-1.261 3.408-0.3 0.418-0.548 0.198-0.433 0.858 0.059 0.332 0.333 0.663 0.492 0.954 0.465 0.855 0.614 1.545 0.605 2.526-6e-3 0.603-0.052 1.124-0.244 1.697-0.094 0.281-0.521 0.945-0.386 1.236 0.285 0.623 1.32 0.522 1.729 1.09 0.575 0.798 0.33 2.21 0.146 3.087-0.187 0.886-1.11 1.86-1.142 2.705-0.011 0.281 0.303 0.56 0.412 0.821 0.34 0.822 0.493 1.813 0.313 2.69-0.193 0.945-0.146 0.867 0.604 1.492 0.359 0.299 0.647 0.792 0.83 1.227 0.375 0.897 0.583 2.026 0.313 2.974-0.125 0.436-0.574 0.835-0.61 1.252-0.04 0.469 0.31 1.17 0.387 1.659 0.131 0.826 0.355 1.642 0.631 2.429 0.964-0.354 1.296-0.755 1.892 0.207 0.4 0.647 0.296 1.807 0.048 2.499-0.277 0.777-1.178 1.303-1.399 2.002-0.146 0.461 0.064 1.104 0.174 1.557 0.676 2.783 1.276 5.539 1.58 8.374z"
              fill="#f9e3b7"
              stroke="#967348"
              stroke-width=".3218"
            />
          </g> */}
        </g>
        {zoomIn === 'face' && (
          <Face
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={faceStyles.face__zoom__in}
          />
        )}
        {(zoomIn === 'skull' || zoomIn === 'inner_ear') && (
          <>
            <InnerEar
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              classNameBones={
                innerEarStyles.inner_ear_bones__zoom__in
              }
              classNameDiagram={
                innerEarStyles.inner_ear_diagram__zoom__in
              }
            />
            <Skull
              bone={bone}
              zoomIn={zoomIn}
              handleZoom={handleZoom}
              className={skullStyles.skull__zoom__in}
            />
          </>
        )}
        {zoomIn === 'foot' && (
          <RightFoot
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={footStyles.front_foot__zoom__in}
          />
        )}
        {zoomIn === 'foot' && (
          <BackFoot
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={footStyles.back_foot__zoom__in}
          />
        )}
        {zoomIn === 'foot' && (
          <LeftFoot
            answers={answers}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={footStyles.left_foot__zoom__in}
          />
        )}
        {zoomIn === 'hand' && (
          <RightHand
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={handStyles.hand__zoom__in}
          />
        )}
        {zoomIn === 'arm' && (
          <LeftArm
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={armStyles.arm__zoom__in}
          />
        )}
        {zoomIn === 'upperBody' && (
          <UpperBody
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={upperBodyStyles.upper_body__zoom__in}
          />
        )}
        {zoomIn === 'arm' && (
          <ClavicleLeft
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={armStyles.arm__zoom__in}
          />
        )}
        {zoomIn === 'pelvis' && (
          <Ischium
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={pelvisStyles.pelvis__zoom__in}
          />
        )}
        {zoomIn === 'leg' && (
          <LeftLeg
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={legStyles.leg__zoom__in}
          />
        )}
        {zoomIn === 'pelvis' && (
          <Pelvis
            bone={bone}
            zoomIn={zoomIn}
            handleZoom={handleZoom}
            className={pelvisStyles.pelvis__zoom__in}
          />
        )}
        {zoomIn === 'upperBody' && (
          <g
            style={{
              display:
                (answers['cervical vertebrae'] ?? 0) < 1 ||
                (zoomIn && zoomIn !== 'upperBody')
                  ? 'none'
                  : '',
            }}
          >
            <polyline
              className={upperBodyStyles.upper_body__zoom__in}
              points="85.795 115.27 145.53 115.27 145.53 96.547 200.77 96.547"
              fill="none"
              stroke="#003cff"
              stroke-width=".546"
            />
          </g>
        )}
        <BodyLabels answers={answers} zoomIn={zoomIn} />
        <g className={zoomIn ? 'opaque' : ''}>
          {/* <rect
            x="14.815"
            y="87.242"
            width="14.924"
            height="306.26"
            fill="#dff3f4"
          /> */}

          <polyline
            points="224.63 761.88 247.11 761.88 247.11 769 289.11 769"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <polyline
            points="216.11 777 252.11 777 252.11 769"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <line
            x1="291.11"
            x2="232.67"
            y1="788"
            y2="788"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <polyline
            points="254.5 801.3 278.11 801.3 278.11 815.5 298.11 815.5"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <line
            x1="284.11"
            x2="243.53"
            y1="815.5"
            y2="815.5"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <line
            x1="359.06"
            x2="318.77"
            y1="436.88"
            y2="436.88"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <line
            x1="345.95"
            x2="306.31"
            y1="415.21"
            y2="415.21"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <polyline
            points="362.34 413.2 354.21 419 319.91 419.12 319.91 415.35"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <line
            x1="365.61"
            x2="316.59"
            y1="455.24"
            y2="455.24"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <polyline
            points="332.22 455.24 332.22 470.17 362.07 470.17"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />
          <polyline
            points="339.87 470.17 339.87 481.45 367.1 481.45"
            fill="none"
            stroke="#003cff"
            stroke-width=".546"
          />

          {/* <rect
            x="254.33"
            y="38.83"
            width="14.925"
            height="85.176"
            fill="#dff3f4"
          /> */}

          {/* <text
            x="254.69786"
            y="35.917721"
            fill="#003cff"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan
              x="254.69786"
              y="35.917721"
              font-family="Arial"
              font-size="11px"
              style={{ lineHeight: '125%' }}
            >
              Skull
            </tspan>
          </text> */}

          {/* <text
            x="260.05814"
            y="52.302723"
            fill="#000000"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan x="260.05814" y="52.302723">
              Cranium
            </tspan>
          </text> */}

          <text
            x="284.81116"
            y="413.27896"
            fill="#000000"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan x="284.81116" y="413.27896">
              Carpals
            </tspan>
          </text>

          <text
            x="275.9736"
            y="435.57498"
            fill="#000000"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan x="275.9736" y="435.57498">
              Metacarpals
            </tspan>
          </text>

          <text
            x="275.43536"
            y="453.99307"
            fill="#000000"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan x="275.43536" y="453.99307">
              Phalanges
            </tspan>
          </text>

          <text
            x="275.06818"
            y="767.55408"
            fill="#000000"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan x="275.06818" y="767.55408">
              Tarsals
            </tspan>
          </text>

          <text
            x="275.0636"
            y="787.21008"
            fill="#000000"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan x="275.0636" y="787.21008">
              Metatarsals
            </tspan>
          </text>

          <text
            x="278.43536"
            y="809.80206"
            fill="#000000"
            font-family="Arial"
            font-size="11px"
            stroke-width="1px"
            style={{ lineHeight: '125%' }}
            xmlSpace="preserve"
          >
            <tspan x="281.43536" y="813.80206">
              Phalanges
            </tspan>
          </text>
        </g>
      </svg>
    </>
  );
};
export default HumanBones;
