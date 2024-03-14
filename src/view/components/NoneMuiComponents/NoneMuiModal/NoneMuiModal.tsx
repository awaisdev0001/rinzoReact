import { FC, useRef, useEffect, MouseEvent } from 'react';
import { CloseButton } from 'src/view/components';
import './NoneMuiModal.scss';
import { SuccessAnimation } from 'src/view/components/SuccessAnimation';
interface IProps {
  children: JSX.Element;
  show: boolean;
  onClose: (args?: boolean | MouseEvent<any>) => any | void;
  width?: string | number;
  height?: string | number;
  title?: string;
  className?: string;
  isSuccessAnimation: boolean;
}

export const NoneMuiModal: FC<IProps> = ({
	children,
	show,
	onClose,
	width,
	height,
	title,
	className,
  isSuccessAnimation
}) => {
	const modalRef = useRef<HTMLElement | any>(null);
	const nodeRef = useRef<HTMLElement | any>();

  const successAnimation = () => {
     if (isSuccessAnimation) {
     return  <SuccessAnimation />
     } else {
       
     }
   };
  
	useEffect(() => {
		if (show) {
			modalRef.current.classList.add('customModalVisible');
		} else {
			modalRef.current.classList.remove('customModalVisible');
		}
	}, [show]);



	return (
    <div ref={modalRef} className="customModal">
      {successAnimation()}
      <div
        className="customModal__bg"
        onClick={() => {
          onClose();
        }}
      ></div>
      <div
        ref={nodeRef}
        className={`modalContent ${className}`}
        style={{ maxWidth: width }}
      >
        <div className="modal-content__header">
          <h2>{title}</h2>
          <CloseButton
            onClick={() => {
              onClose();
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
};
