import BackFoot from './BodyParts/BackFoot';
import BodyLabels from './BodyLabels';
import ClavicleLeft from './BodyParts/ClavicleLeft';
import Face from './BodyParts/Face';
import Hyoid from './BodyParts/Hyoid';
import InnerEar from './BodyParts/InnerEar';
import Ischium from './BodyParts/Ischium';
import LeftArm from './BodyParts/LeftArm';
import LeftFoot from './BodyParts/LeftFoot';
import LeftLeg from './BodyParts/LeftLeg';
import Pelvis from './BodyParts/Pelvis';
import RightFoot from './BodyParts/RightFoot';
import RightHand from './BodyParts/RightHand';
import Skull from './BodyParts/Skull';
import UpperBody from './BodyParts/UpperBody';
import armStyles from '../styles/Arm.module.css';
import faceStyles from '../styles/Face.module.css';
import footStyles from '../styles/Foot.module.css';
import hyoidStyles from '../styles/Hyoid.module.css';
import handStyles from '../styles/Hand.module.css';
import innerEarStyles from '../styles/InnerEar.module.css';
import legStyles from '../styles/Leg.module.css';
import pelvisStyles from '../styles/Pelvis.module.css';
import skullStyles from '../styles/Skull.module.css';
import upperBodyStyles from '../styles/UpperBody.module.css';
import styles from '../styles/Regions.module.css';

const BonesZoomIn = ({ bone, zoomIn, handleZoom, answers }) => {
  return (
    <>
      {zoomIn && (
        <svg
          overflow="visible"
          version="1.0"
          width="100%"
          height="100%"
          viewBox="0 0 435.69 841.89"
          xmlns="http://www.w3.org/2000/svg"
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          // preserveAspectRatio="xMinYMin"
          // preserveAspectRatio="none"
        >
          {zoomIn === 'face' && (
            <>
              <Hyoid
                bone={bone}
                zoomIn={zoomIn}
                handleZoom={handleZoom}
                className={hyoidStyles.hyoid__zoom__in}
              />
              <Face
                bone={bone}
                zoomIn={zoomIn}
                handleZoom={handleZoom}
                className={faceStyles.face__zoom__in}
              />
            </>
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
        </svg>
      )}
    </>
  );
};

export default BonesZoomIn;
