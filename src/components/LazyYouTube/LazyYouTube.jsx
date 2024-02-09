import { useRef } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import styles from './LazyYouTube.module.scss'

const LazyIframe = ({ embedId, title }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div

      className={styles.wrapper}
      ref={containerRef}
    >
      {lockRef.current && (
        <iframe
          title={title}
          style={{
            bottom: 0,
            height: "100%",
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
            width: "100%",
          }}
          src={`https://www.youtube.com/embed/${embedId}`}
          // src={'https://vk.com/video_ext.php?oid=-203257534&id=456240801&hash=081890e7f0e6fc10&hd=2'}
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      )}
    </div>
  );
};

export default LazyIframe;
