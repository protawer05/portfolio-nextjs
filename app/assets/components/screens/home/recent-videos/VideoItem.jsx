import styles from './RecentVideos.module.scss'
const VideoItem = ({item}) => {
    return (
        <a
            href={`https://youtu.be/${item.videoId}`}
            target="_blank"
            rel="noreferrer"
            className={styles.item}
        >
            <img src={item.thumbnail} alt={item.title} width={70} />
            <span>{item.title}</span>
    </a>
    );
};

export default VideoItem;