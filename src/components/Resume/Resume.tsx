import NavBar from '../NavBar';
import { Grid } from '@mui/material';
import {
  arinInfoRes,
  centeneRes,
  coreTech,
  fordRes,
  jobDescriptions,
  otherTech,
  sabRes,
  shortExp,
  userDetails,
  vanGuardRes,
} from '../../utils/constants.ts';
import DownloadIcon from '@mui/icons-material/Download';
import adityaT from '../../assets/images/adityaThummala.png';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SocialMedia from '../SocialMedia';
import './Resume.scss';

const Resume = () => {
  return (
    <div className='resumePageSty'>
      <NavBar />
      <Grid container>
        <Grid item xs={12} md={12} className='dwnLoadStyle'>
          <DownloadIcon
            sx={{ mr: 1, ml: 3, fontSize: '20px', color: 'white' }}
          />
          <span style={{ color: 'white', marginRight: '2rem' }}>Download</span>
        </Grid>
      </Grid>
      <div className='paperStyle'>
        <Grid container>
          <Grid item xs={12} md={12}>
            <p></p>
          </Grid>
          <Grid item xs={12} md={3} className='grdFlx'>
            <img src={adityaT} alt='AdityaThummala' className='imgSty' />
          </Grid>
          <Grid item xs={12} md={9} className='txt-aln'>
            <h1>{userDetails.name}</h1>
            <p className='textDvcSty'>
              Expert Frontend developer and UX Engineer.
            </p>
            <p className='textDvcSty'>
              <EmailIcon
                sx={{
                  mr: 1,
                  ml: 1,
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                }}
              />
              {userDetails.email}
            </p>
            <p className='textDvcSty'>
              <PhoneIcon
                sx={{
                  mr: 1,
                  ml: 1,
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                }}
              />
              {userDetails.phone}
            </p>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className='flxTechStack'>
              <div>
                <div className='hdrTxtSty'>Core Technologies :</div>
                <ul className='lstSty'>
                  {coreTech.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='dvcSpecLay'>
                <div className='hdrTxtSty'>Others :</div>
                <ul className='lstSty'>
                  {otherTech.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className='rgtCnt'>
              <div className='hdrTxtStyRgt'>Education:</div>
              <p className='textDvcSty'>{userDetails.education.col1}</p>
              <p className='textDvcSty'>{userDetails.education.col2}</p>
              <p className='textDvcSty'>{userDetails.education.col3}</p>
              <div className='hdrTxtStyRgt'>Experience:</div>
              <p className='textDvcSty'>{shortExp}</p>
              <div className='subHdr'>Ford Motors:</div>
              <div className='subHdr'>
                April 2021 - Till Date,San Fransisco,CA.
              </div>
              <p className='textDvcSty'>{jobDescriptions.fordDes}</p>
              <ul className='jstFnt'>
                {fordRes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='subHdr'>Centene Corporation:</div>
              <div className='subHdr'>Aug 2018–April 2021,Sacramento,CA.</div>
              <p className='textDvcSty'>{jobDescriptions.cntDes}</p>
              <ul className='jstFnt'>
                {centeneRes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='subHdr'>Sabre Corporation:</div>
              <div className='subHdr'>July 2016–June 2018,Dallas,TX.</div>
              <p className='textDvcSty'>{jobDescriptions.sbrDes}</p>
              <ul className='jstFnt'>
                {sabRes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='subHdr'>Vanguard:</div>
              <div className='subHdr'>Jan 2015–May 2016,Dallas,TX.</div>
              <p className='textDvcSty'>{jobDescriptions.vanGuardDes}</p>
              <ul className='jstFnt'>
                {vanGuardRes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='subHdr'>Arien Infotech: India</div>
              <ul className='jstFnt'>
                {arinInfoRes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
      <SocialMedia />
    </div>
  );
};

export default Resume;
