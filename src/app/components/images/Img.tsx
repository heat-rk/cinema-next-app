type Props = {
  src: string | undefined;
  alt: string | undefined;
  className: string;
};

export default function Img({ src, alt, className }: Props) {
  if (src) {
    return <img src={src} alt={alt} className={className} />;
  } else {
    return null;
  }
}
