import { Grid } from '@mui/material';
import './HomePage.scss';
import DateTime from '../DateTime';
import { AttentionSeeker, Zoom } from 'react-awesome-reveal';
import { shortExp, userDetails } from '../../utils/constants.ts';
import TabIcon from '@mui/icons-material/Tab';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import MouseIcon from '@mui/icons-material/Mouse';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import HikingIcon from '@mui/icons-material/Hiking';
import TerrainIcon from '@mui/icons-material/Terrain';
import WavesIcon from '@mui/icons-material/Waves';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

const HomePage = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12} className='initialGrid'>
          <DateTime />
        </Grid>
        <Grid item xs={12} md={12}>
          <Zoom cascade>
            <Grid item xs={12} md={12}>
              <AttentionSeeker effect='tada' duration={2000}>
                <span className='nameStyle'>{userDetails.name}</span>
              </AttentionSeeker>
              <span className='subNameStyle'> {shortExp}</span>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
            >
              <TabIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <StorageIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <DevicesIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <MouseIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <CloudUploadIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <p className='abtMe'>
                As a web developer and adventurer, I combine technical expertise
                with a <br /> passion for exploration. I create innovative
                websites that captivate audiences and <br />
                deliver unique solutions tailored to your needs. Let's embark on
                an extraordinary digital journey together.{' '}
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
            >
              <DownhillSkiingIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <HikingIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <TerrainIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <WavesIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
              <SportsCricketIcon
                sx={{ mr: 1, ml: 3, mt: 3, fontSize: '40px', color: 'white' }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <p className='abtMe'>
                {' '}
                A fearless adventurer, lover of the outdoors, and seeker of{' '}
                <br /> thrilling experiences. From scaling towering peaks to
                carving through untouched powder, i embrace the wild <br />
                with unwavering passion. With every step, i redefine limits and
                inspire others to join on an extraordinary journey and discover{' '}
                <br />
                the true essence of living life to the fullest.
              </p>
            </Grid>
          </Zoom>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
