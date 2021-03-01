import { Typography } from '@material-ui/core';
import React  from 'react';
import '../../assets/minh.css';
import './Profile.css'
// import '../../index.css';
import Minh from '../../assets/images/CV6.jpg';
import CustomTimeline, {CustomTimelineSeparator} from './../Timeline/Timeline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import resumeData from '../../utils/resumeData';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({ title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className="timeline_content">
            {
                link ? (
                //VD: Name:" "ABC 
                <Typography className="timelineItem_text">
                    <span>{title}:</span>{" "}
                    <a href={link} target='_blank'>
                        {text}
                    </a>
                </Typography>
                ) : (
                <Typography className="timelineItem_text">
                    <span>{title}:</span> {text}
                </Typography>
                )
            }
        </TimelineContent>
    </TimelineItem>
);

const Profile = () => {
    return(
        <div className="profile container_shadow">
            <div className='profile_name'>
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>
            </div>
            
            <figure className="profile_image">
                <img src={Minh} alt="Nguyen_Vu_Ngoc_Minh"/>
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
                    <CustomTimelineItem title="Tên" text={resumeData.name}/>
                    <CustomTimelineItem title="Điện thoại" text={resumeData.phone}/>
                    <CustomTimelineItem title="Email" text={resumeData.email}/>
                    <CustomTimelineItem title="Địa chỉ" text={resumeData.address}/>
                    
                    {
                        Object.keys(resumeData.socials).map((key) => (
                            <CustomTimelineItem 
                            title ={key}
                            text={resumeData.socials[key].text} 
                            link={resumeData.socials[key].link}/>
                        ))
                    }
                </CustomTimeline>
                
                <div className='button_container'>
                    <CustomButton text={'Download CV'} icon ={<GetAppIcon/>}/>
                </div>
            </div>
        </div>
    );
};

export default Profile;