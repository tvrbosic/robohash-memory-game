import classes from './StatusPanel.module.css';

const StatusPanel = () => {
  return <div className={classes.Container}>
    <div className={classes.PanelItem}>Moves: 0</div>
    <div className={classes.PanelItem}>Elapsed time: 00:00:00</div>
    <div className={classes.PanelItem}>Progress: 100%</div>
  </div>;
};

export default StatusPanel;
