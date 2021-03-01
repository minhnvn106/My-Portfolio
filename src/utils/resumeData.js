import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook"

export default  {
    name: 'Nguyễn Vũ Ngọc Minh',
    title: 'Java Back-End Developer',

    birthday: '29/01/1998',
    email: 'nvnminh98@gmail.com',
    address: 'Số 45 Lê Văn Sĩ Phường 13 Quận Phú Nhuận TP.HCM',
    phone: '(+84) 368 529 198',
    
    socials: {
        Facebook: {
            link: 'https://www.facebook.com/AinMinh98',
            text: 'AinMinh98',
            icon: <FacebookIcon />,
        },
        Instagram: {
            link: 'https://www.instagram.com/ainminh/',
            text:'AinMinh',
            icon: <InstagramIcon />,
        },
    },  
};