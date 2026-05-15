import styles from "./YouTubeEmbed.module.css";

interface Props {
  videoId: string;
  title?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "YouTube video",
}: Props) {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
