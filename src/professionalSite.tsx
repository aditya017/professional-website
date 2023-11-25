import './professionalSite.scss';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import { useEffect, useState } from 'react';
import { dayNightIdentifier } from './store/features/DayTimeBlnSlice/dayTimeBlnSlice.ts';
import { firstRunIdentifier } from './store/features/initialRunCompBln/initialRunCompBln.ts';
import dayImage from '../src/assets/images/goldenBridge.jpeg';
import nightImage from '../src/assets/images/nightTimeCompressed.jpg';
import santaMonicaDay from '../src/assets/images/santaMonica.jpg';
import caliNightSky from '../src/assets/images/caliNightSky.jpg';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutMeInDepth from './components/AboutMeInDepth';
import SocialMedia from './components/SocialMedia';
import RollOver from './components/RollOver';

function ProfessionalSite() {
  const [isDay, setIsDay] = useState(false);
  const canWeRun = useAppSelector((state) => state.isItFirstRun.isItFirstRun);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentTime = new Date().getHours();
    setIsDay(currentTime >= 6 && currentTime < 16);
    dispatch(dayNightIdentifier(isDay));
    let timer: NodeJS.Timeout;
    if (canWeRun) {
      timer = setTimeout(() => {
        dispatch(firstRunIdentifier(false));
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isDay]);

  return (
    <div>
      {!canWeRun ? (
        <>
          <div
            id='appContent'
            style={{ backgroundImage: `url(${isDay ? dayImage : nightImage})` }}
          >
            <NavBar noHome={true} />
            <HomePage />
          </div>
          <div
            id='appContent'
            style={{
              backgroundImage: `url(${isDay ? santaMonicaDay : caliNightSky})`,
            }}
          >
            <AboutMeInDepth />
            <SocialMedia iconClr={true} />
          </div>
        </>
      ) : (
        <RollOver />
      )}
    </div>
  );
}

export default ProfessionalSite;
