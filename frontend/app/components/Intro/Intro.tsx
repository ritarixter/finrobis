import { useNavigate } from "react-router";
import { Button, ThemeButton } from "../ui/Button/Button";
import styles from "./Intro.module.scss";
import succesIcon from "../../assets/images/icons/success.svg";

interface IntroProps {
  title: string;
  subtitle: string;
  badgeText: string;
  imageSrc: string;
  button1: {
    text: string;
    onClick?: () => void;
  };
  button1Theme?: ThemeButton;
  button2?: {
    text: string;
    onClick?: () => void;
  };
  type?: "with-border" | "without-border";
}

export function Intro({
  title,
  subtitle,
  badgeText,
  imageSrc,
  button1,
  button1Theme = ThemeButton.BLACK,
  button2,
  type = "with-border",
}: IntroProps) {
  const navigate = useNavigate();

  const handleButton1Click = () => {
    button1.onClick?.();
    navigate("/company/contact#form");
  };

  return (
    <section
      className={`${styles.intro} ${type === "with-border" ? styles.withBorder : styles.withoutBorder}`}
    >
      <div className={styles.content}>
        <div className={styles.badge}>
          <img src={succesIcon} alt="Success" />
          <span className={styles.badgeText}>{badgeText}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.buttons}>
          <Button theme={button1Theme} onClick={handleButton1Click}>
            {button1.text}
          </Button>
          {button2 ? (
            <Button theme={ThemeButton.GREEN} onClick={button2.onClick}>
              {button2.text}
            </Button>
          ) : null}
        </div>
      </div>

      <img className={styles.image} src={imageSrc} alt={`Intro ${title}`} />
    </section>
  );
}
