import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>地震大数据可视化面板</h2>
      </header>
      <div className={styles.content}>
        { props.children }
      </div>      
    </div>
  );
}

export default BasicLayout;
