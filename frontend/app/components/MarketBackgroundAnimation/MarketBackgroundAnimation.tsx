import styles from "./MarketBackgroundAnimation.module.scss";

interface MarketBackgroundAnimationProps {
  className?: string;
}

export function MarketBackgroundAnimation({ className = "" }: MarketBackgroundAnimationProps) {
  return (
    <div className={`${styles.animation} ${className}`.trim()} aria-hidden="true">
      <svg className={styles.trend} viewBox="0 0 1000 320" preserveAspectRatio="none">
        <path
          className={styles.trendGlow}
          d="M0 278 C80 254 128 280 190 224 S302 246 370 185 S478 218 550 150 S665 180 728 112 S842 134 1000 28"
        />
        <path
          className={styles.trendLine}
          d="M0 278 C80 254 128 280 190 224 S302 246 370 185 S478 218 550 150 S665 180 728 112 S842 134 1000 28"
        />
      </svg>

      <span className={`${styles.dotCloud} ${styles.dotCloudPrimary}`} />
      <span className={`${styles.dotCloud} ${styles.dotCloudSecondary}`} />
      <span className={`${styles.tradeNode} ${styles.tradeNodeOne}`} />
      <span className={`${styles.tradeNode} ${styles.tradeNodeTwo}`} />
      <span className={`${styles.tradeNode} ${styles.tradeNodeThree}`} />
    </div>
  );
}
