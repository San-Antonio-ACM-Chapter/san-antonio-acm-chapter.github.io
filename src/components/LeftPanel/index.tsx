import styles from './styles.module.css';

interface LeftPanelProps {
    title: string,
    content?: string|React.ReactNode
}

/**
 * This function returns the about us section of the website
 * @constructor - returns the about us section of the website
 */
const LeftPanel = ({ title, content }: LeftPanelProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.containerHeader}>{title}</h1>
            <div className={styles.containerParagraph}>
                <em>{content}</em>
            </div>
        </div>
    );
}

export default LeftPanel;