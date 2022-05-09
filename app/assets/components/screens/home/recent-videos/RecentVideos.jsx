import { useQuery } from 'react-query'
import styles from './RecentVideos.module.scss'
import VideoItem from './VideoItem'
import axios from 'axios';

const RecentVideos = () => {

    const { data, isLoading } = useQuery('get recent videos', () => axios.get('/api/youtube'), {select: ({data}) => data}) 


    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                Новые видео <span>👉</span>
            </div>
        {isLoading 
        ? 'Загрузка' 
        : data.length 
        ? data.map(video => <VideoItem key={video._id} item={video}/>) 
        : 'Пока не подгрузились'}
        </div>
    );
};

export default RecentVideos;