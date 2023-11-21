import './professionalSite.scss';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import { useEffect, useState } from 'react';
import { dayNightIdentifier } from './store/features/DayTimeBlnSlice/dayTimeBlnSlice.ts';
import { firstRunIdentifier } from './store/features/initialRunCompBln/initialRunCompBln.ts';
import { Grid } from '@mui/material';

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
      <Grid container spacing={2}>
        <Grid item lg={6} sm={6} xs={12}>
          hello
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          4
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          hello2
        </Grid>
        <Grid item lg={6} sm={6} xs={12}>
          4
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfessionalSite;
