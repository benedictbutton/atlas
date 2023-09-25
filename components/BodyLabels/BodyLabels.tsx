import ArmLabels from './ArmLabels';
import FootLabels from './FootLabels';
import HandLabels from './HandLables';
import FaceLabels from './FaceLabels';
import InnerEarLabels from './InnerEarLabels';
import LegLabels from './LegLabels';
import PelvisLabels from './PelvisLabels';
import SkullLabels from './SkullLabels';
import UpperBodyLabels from './UpperBodyLabels';
import armStyles from '../../styles/Arm.module.css';
import faceStyles from '../../styles/Face.module.css';
import footStyles from '../../styles/Foot.module.css';
import handStyles from '../../styles/Hand.module.css';
import innerEarStyles from '../../styles/InnerEar.module.css';
import legStyles from '../../styles/Leg.module.css';
import pelvisStyles from '../../styles/Pelvis.module.css';
import skullStyles from '../../styles/Skull.module.css';
import upperBodyStyles from '../../styles/UpperBody.module.css';

const BodyLabels = ({
  answers,
  zoomIn,
}: {
  answers: AnswersObject;
  zoomIn: string;
}) => {
  return (
    <>
      {zoomIn === 'arm' && (
        <ArmLabels
          answers={answers}
          zoomIn={zoomIn}
          className={armStyles.arm__zoom__in}
        />
      )}
      {zoomIn !== 'arm' && (
        <ArmLabels
          answers={answers}
          zoomIn={zoomIn}
          className={armStyles.arm__zoom__out}
        />
      )}
      {zoomIn === 'foot' && (
        <>
          <FootLabels
            answers={answers}
            zoomIn={zoomIn}
            className={footStyles.front_foot__zoom__in}
          />
          {/* <BackfootLabel answers={answers} zoomIn={zoomIn} /> */}
        </>
      )}
      {zoomIn !== 'foot' && (
        <FootLabels
          answers={answers}
          zoomIn={zoomIn}
          className={footStyles.front_foot__zoom__out}
        />
      )}
      {zoomIn === 'hand' && (
        <HandLabels
          answers={answers}
          zoomIn={zoomIn}
          className={handStyles.hand__zoom__in}
        />
      )}
      {zoomIn !== 'hand' && (
        <HandLabels
          answers={answers}
          zoomIn={zoomIn}
          className={handStyles.hand__zoom__out}
        />
      )}
      {zoomIn === 'upperBody' && (
        <UpperBodyLabels
          answers={answers}
          zoomIn={zoomIn}
          className={upperBodyStyles.upper_body__zoom__in}
        />
      )}
      {zoomIn !== 'upperBody' && (
        <UpperBodyLabels
          answers={answers}
          zoomIn={zoomIn}
          className={upperBodyStyles.upper_body__zoom__out}
        />
      )}
      {zoomIn === 'leg' && (
        <LegLabels
          answers={answers}
          zoomIn={zoomIn}
          className={legStyles.leg__zoom__in}
        />
      )}
      {zoomIn !== 'leg' && (
        <LegLabels
          answers={answers}
          zoomIn={zoomIn}
          className={legStyles.leg__zoom__out}
        />
      )}
      {zoomIn === 'pelvis' && (
        <PelvisLabels
          answers={answers}
          zoomIn={zoomIn}
          className={pelvisStyles.pelvis__zoom__in}
        />
      )}
      {zoomIn !== 'pelvis' && (
        <PelvisLabels
          answers={answers}
          zoomIn={zoomIn}
          className={pelvisStyles.pelvis__zoom__out}
        />
      )}
      {(zoomIn === 'skull' || zoomIn === 'inner_ear') && (
        <>
          <InnerEarLabels
            answers={answers}
            zoomIn={zoomIn}
            className={innerEarStyles.inner_ear_labels__zoom__in}
          />
          <SkullLabels
            answers={answers}
            zoomIn={zoomIn}
            className={skullStyles.skull_labels__zoom__in}
          />
        </>
      )}
      {zoomIn !== 'skull' && zoomIn !== 'inner_ear' && (
        <>
          <InnerEarLabels
            answers={answers}
            zoomIn={zoomIn}
            className={innerEarStyles.inner_ear_labels__zoom__out}
          />
          <SkullLabels
            answers={answers}
            zoomIn={zoomIn}
            className={skullStyles.skull_labels__zoom__out}
          />
        </>
      )}
      {zoomIn === 'face' && (
        <FaceLabels
          answers={answers}
          zoomIn={zoomIn}
          className={faceStyles.face__zoom__in}
        />
      )}
      {zoomIn !== 'face' && (
        <FaceLabels
          answers={answers}
          zoomIn={zoomIn}
          className={faceStyles.face__zoom__out}
        />
      )}
    </>
  );
};

export default BodyLabels;
