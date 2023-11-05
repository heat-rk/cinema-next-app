export enum ArrowDirection {
  Left,
  Right,
}

type Props = {
  direction: ArrowDirection;
  className: string;
  onClick: () => void;
};

export default function Arrow({ direction, className = "", onClick }: Props) {
  if (direction == ArrowDirection.Left) {
    return (
      <div onClick={onClick} className="p-4">
        <div
          className={`h-0 w-0 border-y-8 border-y-transparent border-e-[16px] border-e-red-600 ${className}`}
        />
      </div>
    );
  } else if (direction == ArrowDirection.Right) {
    return (
      <div onClick={onClick} className="p-4">
        <div
          className={`h-0 w-0 border-y-8 border-y-transparent border-s-[16px] border-s-red-600 ${className}`}
        />
      </div>
    );
  } else {
    return null;
  }
}
