import Img from "./Img";

type Props = {
  src: string | undefined;
  alt: string | undefined;
  className: string;
  placeHolderClassName: string;
  imgClassName: string;
};

export default function AvatarImg({
  src,
  alt,
  className,
  placeHolderClassName,
  imgClassName,
}: Props) {
  return (
    <div className={`${className} relative`}>
      <svg
        className={`${placeHolderClassName}`}
        viewBox="0 0 32 32"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="cls-1"
          d="M22.82,20.55l-.63-.18a7.3,7.3,0,0,1-.9-.29,1.51,1.51,0,0,1-1-1.46c2.84-3,2.8-5.67,2.74-8.47,0-.38,0-.76,0-1.15a7.1,7.1,0,0,0-7-7A7.1,7.1,0,0,0,9,9c0,.39,0,.77,0,1.15-.06,2.8-.1,5.45,2.74,8.47a1.53,1.53,0,0,1-1.06,1.48c-.28.11-.58.19-.86.27l-.63.18C5.61,21.74,2,25,2,29a1,1,0,0,0,2,0c0-3,3-5.61,5.82-6.55.16-.06.33-.1.52-.15A9.6,9.6,0,0,0,11.42,22a3.4,3.4,0,0,0,2-2,6,6,0,0,0,.83.34l-1,1a1,1,0,0,0-.18,1.16L14,24.14,13,28.8a1,1,0,0,0,2,.4l1-5a1.36,1.36,0,0,0,0-.2,1.36,1.36,0,0,0,0,.2l1,5a1,1,0,0,0,1,.8l.2,0A1,1,0,0,0,19,28.8l-.93-4.66.84-1.69a1,1,0,0,0-.18-1.16l-1-1a5.14,5.14,0,0,0,.84-.35,3.42,3.42,0,0,0,2,2,9.62,9.62,0,0,0,1.15.38c.18.05.36.09.52.15C25,23.39,28,26,28,29a1,1,0,0,0,2,0C30,25,26.39,21.74,22.82,20.55ZM11,10.18C11,9.8,11,9.4,11,9A5,5,0,0,1,21,9c0,.4,0,.8,0,1.18,0,2.68.09,4.8-2.47,7.36a3.58,3.58,0,0,1-5.08,0C10.9,15,10.94,12.86,11,10.18Zm5.12,13.37A1,1,0,0,0,16,24a1,1,0,0,0-.11-.45l-.67-1.35.78-.79.78.79Z"
        />
      </svg>

      <Img
        src={src}
        alt={alt}
        className={`${imgClassName} absolute top-0 left-0`}
      />
    </div>
  );
}
