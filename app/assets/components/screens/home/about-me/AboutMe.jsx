import Image from 'next/image';
import styles from './AboutMe.module.scss'
import { APP_URL } from '../../../../constants'

const AboutMe = ({me}) => {
    return (
        <div className={styles.me}>
            <div className={styles['image-wrapper']}>
                <Image
                src={`${APP_URL}${me.avatar}`}
                width={190}
                height={190}
                className={styles.image}
                alt={me.siteName}
                quality={100}
                />
            </div>
             <div className={styles.heading}>
                 <span>RED Group</span>
                 <Image
                 src={`${APP_URL}/icons/verified.svg`}
                 alt=""
                 height={16}
                 width={16}
                 />
             </div>
            <EmailButton/>
        </div>
    );
};

export default AboutMe;