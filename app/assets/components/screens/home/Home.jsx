import Circles from '../../ui/circles/Circles'
import AboutMe from './about-me/AboutMe'
import RecentVideos from './recent-videos/RecentVideos'
import Grid from './grid/Grid'
import MetaTitle from '../../ui/MetaTitle';
import styles from './Home.module.scss'

const Home = ({links, me}) => {
    return (
        <section className={styles.section}>
            <MetaTitle title="RED Links | Все полезные ссылки тут"/>
            <div className={styles.container}>
                <AboutMe me={me}/>
                <RecentVideos/>
                <Grid links={links}/>
            </div>
            <Circles/>
        </section>
    );
};

export default Home;