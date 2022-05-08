import cn from 'classnames';
import {useOutside} from '../../../../../hooks/useOutside';
import styles from './DescriptionButton.module.scss';
import parse from 'html-react-parser';

const DescriptionButton = ({description}) => {
    const {isShow, setIsShow, ref} = useOutside(false);
    return (
        <div className={styles.parent} ref={ref}>
            <button onClick={() => setIsShow(!isShow)} className={cn({
                [styles.active]: isShow
            })}>
                <span>Обо мне</span>
            </button>
            {isShow && <article>{parse(description)}</article>}
        </div>
    );
};

export default DescriptionButton;