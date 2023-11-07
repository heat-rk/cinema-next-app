export enum ArrowDirection {
  Left,
  Right,
}

type Props = {
  direction: ArrowDirection;
  className: string;
  isVisible: boolean;
};

export default function Arrow({ direction, className = "", isVisible }: Props) {
  if (direction == ArrowDirection.Left && isVisible) {
    return (
      <div className={`${className} p-4`}>
        <svg 
          className="fill-red-600 w-8 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330.002 330.002">
          <path id="XMLID_227_" d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001C236.878,322.03,238.221,312.628,233.25,306.001z"/>
        </svg>
      </div>
    );
  } else if (direction == ArrowDirection.Right && isVisible) {
    return (
      <div className={`${className} p-4`}>
        <svg 
          className="fill-red-600 w-8 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330.002 330.002">
          <path id="XMLID_226_" d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"/>
        </svg>
      </div>
    );
  } else {
    return <div className={`${className} w-16 h-14`} />;
  }
}
