import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCookie, setCookie } from "../../utils/helper";
import { RCL as useTranslation } from "../RCL";
import { Button } from "../Button/Button";
import * as styles from "./CookieBanner.module.scss";

const CookieBanner = ({ onLoad, onUnload }) => {
  const bannerText = useTranslation({ searchKey: "sunwing-vacations-group-cookie-acceptance" });
  const buttonText = useTranslation({ searchKey: "accept-svg" });

  const [shouldShowBanner, setShouldShowBanner] = useState(false);

  useEffect(() => {
    const cookieAcceptance = getCookie("cookie-acceptance");
    if (!cookieAcceptance) {
      setShouldShowBanner(true);
      if (onLoad && typeof onLoad === "function") {
        onLoad();
      }
    }
  }, []);

  const handleClick = () => {
    const expiration = new Date();
    expiration.setUTCMonth(expiration.getMonth() + 1);

    const cookieDomain = window.location.hostname.replace(/^www\./, ".");
    setCookie("cookie-acceptance", true, "/", cookieDomain, expiration);
    setShouldShowBanner(false);
    if (onUnload && typeof onUnload === "function") {
      onUnload();
    }
  };

  if (!shouldShowBanner) {
    return null;
  }
  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <span className={styles.banner__text}>{bannerText}</span>
        <div className={styles.banner__btnWrapper}>
          <Button className={styles.banner__btn} size="sm" label={buttonText} variant="secondary" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

CookieBanner.propTypes = {
  onLoad: PropTypes.func,
  onUnload: PropTypes.func,
};
CookieBanner.defaultProps = {
  onLoad: undefined,
  onUnload: undefined,
};
export default CookieBanner;
export { CookieBanner };
