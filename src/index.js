import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import './style.css'


const ReactDragBottomSheet = ({
                                  children,
                                  isOpen =  false,
                                  onAfterClose = null,
                                  shouldCloseOnOverlayClick= true,
                                  shouldCloseOnEsc= true,
                                  maxHeight='50%',
                                  overlayClassName = '',
                                  className=''
                              }, fRef) =>  {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(isOpen);
    const [animationClass,setAnimationClass] =  useState('')
    const [isDragging, setIsDragging] = useState(false);
    const sheetRef = useRef(null);
    const startYRef = useRef(0);
    const [bottomSheetHeight,setBottomSheetHeight] = useState(null)

    const handleDragStart = (event) => {
        setIsDragging(true);
        startYRef.current = event.touches ? event.touches[0].clientY : event.clientY;
    };

    useEffect(() => {
        if(isBottomSheetOpen) {
            setTimeout(() => {
                const  bottomSheet = document.getElementsByClassName('bottom-sheet')[0];
                setBottomSheetHeight(bottomSheet?.clientHeight)
            },1000)

        }

    },[isBottomSheetOpen])
    const handleDragMove = (event) => {
        if (!isDragging) return;
        const currentY = event.touches ? event.touches[0].clientY : event.clientY;
        const diffY = currentY - startYRef.current;
        if (diffY > 0 && sheetRef.current) {
            // @ts-ignore
            sheetRef.current.style.transform = `translateY(${diffY}px)`;
        } else {

              sheetRef.current.style.maxHeight = `${bottomSheetHeight + Math.abs(diffY)}px`
        }
    };

    const handleDragEnd = (event) => {
        if (!isDragging) return;
        setIsDragging(false);
        sheetRef.current.style.maxHeight = maxHeight;
        const endY = event.touches ? event.touches[0].clientY : event.clientY;
        const diffY = endY - startYRef.current;

        if (diffY > 100) {
            close(false);
        }

        if (sheetRef.current) {
            // @ts-ignore
            sheetRef.current.style.transform = '';
        }
    };

    const onKeyDoenEscape = (event) => {

        if(shouldCloseOnEsc) {
            if (event.key === 'Escape' || event.keyCode === 27) {
                close();
                // Place your logic here
            }

        }
    }

    const close = (isWithAnimation =  true) => {
        if(isWithAnimation) {
            setAnimationClass('close-bottomSheet');
            setTimeout(() => {
                setIsBottomSheetOpen(false)
                if(onAfterClose) {
                    onAfterClose()

                }
            },1000)

        } else {
            setIsBottomSheetOpen(false)
            if(onAfterClose) {
                onAfterClose()

            }

        }


    }
    const open = () => {
        setIsBottomSheetOpen(true)
    }

    useImperativeHandle(fRef, () => {
        return {
            open() {
                open()
            },
            close() {
                close()
            }

        };
    }, []);



    useEffect(() => {
        const handleTouchMove = (event) => {
            handleDragMove(event);
        };

        const handleMouseMove = (event) => {
            handleDragMove(event);
        };

        const handleTouchEnd = (event) => {
            handleDragEnd(event);
        };

        const handleMouseUp = (event) => {
            handleDragEnd(event);
        };

        const handleKeyDown = (event) => {
            onKeyDoenEscape(event)
        }

        if (isDragging) {
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('touchend', handleTouchEnd);
            window.addEventListener('mouseup', handleMouseUp);


        } else {
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('keydown', handleKeyDown);

        };
    }, [isDragging,bottomSheetHeight]);

    useEffect(() => {
        setTimeout(() => {
            if(isBottomSheetOpen) {
                setAnimationClass('open-bottomSheet')
            }
        },10)


    },[isBottomSheetOpen])




    return (
        <>
            {
                isBottomSheetOpen ? (
                    <div className={`bottom-sheet-overlay ${overlayClassName}`} onClick={() => {
                        if(shouldCloseOnOverlayClick) {
                            close()
                        }
                    }}>
                        <div
                            className={`bottom-sheet ${animationClass} ${className} ${isDragging ? 'dragging' : ''}`}
                            onClick={(e) => e.stopPropagation()}
                            ref={sheetRef}
                            style={{
                                maxHeight:maxHeight
                            }}

                        >
                            <div className={'drag-handle-main'}>
                                <div
                                    className="drag-handle"
                                    onMouseDown={handleDragStart}
                                    onTouchStart={handleDragStart}
                                >

                                </div>
                            </div>
                            <div className={'content'}>
                                {children}
                            </div>


                        </div>
                    </div>
                ) : ''
            }
        </>




    )
}


export default forwardRef(ReactDragBottomSheet)
