import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header className='bg-black'>
            <a href="#" id="logo">
                <img src={require('./logo.png')} alt="img" />
            </a>

            <menu>
                <SocialList></SocialList>
                <NotifyUser></NotifyUser>
                <HeaderBtn></HeaderBtn>
            </menu>
        </header>
    );
}

export default Header;

const SocialList = () => {
    const social_objects = [
        {
            id: 1,
            name: 'twitter',
            link: '#',
            alt: 'twitter',
            icon: <svg width={17} height={13} viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.1541 1.63727C15.8572 1.24572 15.8894 0.97052 16.1436 0.230612C15.4854 0.593599 14.756 0.857653 13.9802 0.999782C13.3603 0.385282 12.475 0 11.4952 0C9.61372 0 8.08902 1.41851 8.08902 3.16586C8.08902 3.41389 8.119 3.65565 8.17672 3.88766C5.3462 3.75598 2.83577 2.49562 1.1559 0.579665C0.862799 1.04716 0.694887 1.59129 0.694887 2.17165C0.694887 3.27037 1.29682 4.2388 2.20984 4.80662C1.65139 4.7899 1.12666 4.64777 0.667901 4.41089C0.667151 4.42412 0.667151 4.43666 0.667151 4.4506C0.667151 5.98476 1.84104 7.26392 3.40022 7.55515C2.90098 7.68125 2.37476 7.70076 1.86128 7.61019C2.2953 8.86706 3.55314 9.78254 5.04336 9.80832C3.58537 10.8701 1.77807 11.3125 0 11.1188C1.50821 12.0169 3.29752 12.5408 5.22177 12.5408C11.487 12.5408 14.9127 7.71679 14.9127 3.53303C14.9127 3.39508 14.9105 3.25922 14.9037 3.12336C15.5686 2.67747 16.3677 2.26153 16.8242 1.62613C16.214 1.87903 15.6998 1.88739 15.1541 1.63727Z" fill="white" />
            </svg>
        },
        {
            id: 2,
            name: 'facebook',
            link: '#',
            alt: 'facebook',
            icon: <svg width={11} height={16} viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.0204 4.8526H6.82108V3.52536C6.82108 2.90111 7.26635 2.7555 7.57969 2.7555C7.89302 2.7555 9.81951 2.7555 9.81951 2.7555V0.00905726L6.57446 0C3.63075 0 3.07304 2.04694 3.07304 3.35815V4.8526H0.824219V7.63945H3.07304C3.07304 11.2707 3.07304 16 3.07304 16H6.82108C6.82108 16 6.82108 11.2275 6.82108 7.63945H9.70782L10.0204 4.8526Z" fill="white" />
            </svg>
        },
        {
            id: 3,
            name: 'Tumblr',
            link: '#',
            alt: 'Tumblr',
            icon: <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.32051 0V3.5H9.82051V6.3H6.32051V10.1605C6.32051 13.6801 8.78451 13.2594 10.5205 12.1191V15.2222C5.81091 17.4426 2.12051 15.1774 2.12051 12.2437V6.3H0.0205078V4.3176C0.652608 4.1125 1.59201 3.8178 2.04281 3.4349C2.49501 3.0492 2.85621 2.5893 3.12851 2.0517C3.40221 1.5148 3.59051 0.8302 3.69271 0H6.32051V0Z" fill="white" />
            </svg>
        },
        {
            id: 4,
            name: 'Vimeo',
            link: '#',
            alt: 'Vimeo',
            icon: <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.942 2.77444C15.8726 4.12683 14.7866 5.97554 12.6915 8.32139C10.5233 10.7743 8.68607 12 7.18463 12C6.25619 12 5.46936 11.2543 4.82695 9.758C4.39649 8.38516 3.96885 7.01233 3.53933 5.64358C3.06104 4.14646 2.54899 3.39831 2.0013 3.39831C1.8822 3.39831 1.46675 3.61662 0.750255 4.05406L0 3.21106C0.785892 2.61009 1.56053 2.00666 2.32485 1.40487C3.37146 0.61502 4.15829 0.200471 4.68347 0.157135C5.92139 0.0524757 6.68477 0.790815 6.97268 2.3697C7.27935 4.0745 7.49504 5.13418 7.61415 5.54955C7.97239 6.96245 8.3644 7.66726 8.79392 7.66726C9.12685 7.66726 9.62764 7.21101 10.2954 6.2977C10.9631 5.38275 11.3185 4.68774 11.3673 4.2086C11.463 3.41875 11.1056 3.02627 10.2954 3.02627C9.91368 3.02627 9.51979 3.09659 9.11559 3.24377C9.90336 1.02058 11.4039 -0.0603602 13.6209 0.00259896C15.263 0.0426639 16.0386 0.968245 15.942 2.77444Z" fill="white" />
            </svg>

        },
    ]
    return (
        <ul className="social_list">
            {social_objects.map(v => {
                return (
                    <li key={v.id}>
                        <a href={v.link} alt={v.alt}>
                            {v.icon}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

const NotifyUser = () => {
    return (
        <div className="notify_user text-white">
            <ul>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                    <svg style={{marginRight: '10px'}} width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 7C0 3.13401 3.13401 0 7 0C10.8641 0.00455859 13.9954 3.1359 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM8.45918 9.359C8.70768 9.60742 9.1105 9.60742 9.359 9.359C9.60742 9.1105 9.60742 8.70768 9.359 8.45918L7.63636 6.73655V3.18182C7.63636 2.83036 7.35145 2.54545 7 2.54545C6.64855 2.54545 6.36364 2.83036 6.36364 3.18182V7C6.36367 7.16876 6.43074 7.3306 6.55009 7.44991L8.45918 9.359Z" fill="white" />
                    </svg> <small>Open everyday till 2:00 am</small>
                </li>
                <li style={{display: 'flex', alignItems: 'center'}}>
                    <svg style={{marginRight: '10px'}} width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.22222C0 2.78578 2.78578 0 6.22222 0C9.65866 0 12.4444 2.78578 12.4444 6.22222C12.4444 11.2593 6.22222 16 6.22222 16C6.22222 16 0 11.2593 0 6.22222ZM3.25926 6.22222C3.25926 7.85862 4.58582 9.18518 6.22222 9.18518C7.85862 9.18518 9.18518 7.85862 9.18518 6.22222C9.18518 4.58582 7.85862 3.25926 6.22222 3.25926C4.58582 3.25926 3.25926 4.58582 3.25926 6.22222Z" fill="white" />
                    </svg>
                    <small>62-A Clements Road, West Midlands</small>
                </li>
            </ul>
        </div>
    )
}
const HeaderBtn = () => {
    return (
        <div className="header_btn">
            <a href="#" className='btn-primary'><small>Book Now</small></a>
            <a href="#" className='btn-order'><small>Order Now</small></a>
        </div>
    )
}