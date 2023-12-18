import './DateTime.scss';
import { useAppSelector } from '../../store/hooks.ts';
import { useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Grid } from '@mui/material';

const DateTime = () => {
  const isItBright = useAppSelector((state) => state.isItDay.isItDay);
  const currentDateTime = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDateTime.toLocaleDateString(undefined, options);

  useEffect(() => {}, [isItBright]);
  const CurrentHourOfTheDay = () => {
    if (isItBright) {
      return (
        <WbSunnyIcon
          sx={{
            mr: 1,
            ml: 3,
            mt: 3,
            verticalAlign: 'top',
            fontSize: '53px',
            color: '#FFC300',
          }}
        />
      );
    } else {
      return (
        <DarkModeIcon
          sx={{
            mr: 1,
            ml: 3,
            verticalAlign: 'top',
            fontSize: '53px',
            color: '#E0E0E0',
          }}
        />
      );
    }
  };
  return (
    <Grid container>
      <Grid item xs={12} md={12} className='dwnLoadStyle'>
        <div className='dateCtr'>
          <CurrentHourOfTheDay />
          <span style={{ color: isItBright ? '#FFA500' : '#ffd700' }}>
            <span className='cstDateStyle'>{currentDateTime.getDate()}</span>
            <span className='monthStyle'>
              {formattedDate.split(' ')[0].substring(0, 3)}
            </span>
          </span>
        </div>
      </Grid>
    </Grid>
  );
};

export default DateTime;
