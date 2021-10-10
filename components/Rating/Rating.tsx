import { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';
import styles from './Rating.module.css';

export const Rating = ({ isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((item: JSX.Element, i: number) => {
            return (
               <span 
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onHandleClick(i + 1)}>
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i+1, e)}
                    />
               </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onHandleClick = (i: number) => {
        if(!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if(e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    return (
        <div { ...props }>
            {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
        </div>
    );
};