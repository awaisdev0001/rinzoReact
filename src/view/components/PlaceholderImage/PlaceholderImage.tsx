import { FC, useEffect, useRef, useState } from "react";
import "./PlaceholderImage.scss";
import pic from 'src/assets/images/NFT/default-nft.png';

interface IProps {
  src?: string;
  className?: string;
  alt?: string;
}

export const PlaceholderImage: FC<IProps> = ({ className, src, alt }) => {
  const [loading, setLoading] = useState(0);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => setLoading(0), [src]);

  useEffect(() => {
    if (ref.current?.complete) {
      setLoading(1);
    }
  }, [src]);

  return (
    <div className={"placeholder-image " + className + " " + (loading === 0 ? "placeholder-image-loading" : "")}>
      {loading !== 2 && (
        <img
          src={src || pic}
          alt={alt}
          ref={ref}
          onLoad={() => {
            setLoading(1);
          }}
          onError={(e: any) => {
            setLoading(0);
            e.target.src = pic;
          }}
        />
      )}
    </div>
  );
};
