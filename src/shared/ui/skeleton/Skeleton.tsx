import {FC} from "react";
import {SkeletonItem} from "./skeletonItem/SkeletonItem";

type PropsType = {
    rowSkeleton: number
}
export const Skeleton: FC<PropsType> = ({rowSkeleton}) => {
    const rowSkeletonArr = Array.from(Array(rowSkeleton).keys());
    return <>
        {rowSkeletonArr.map((i) => {
            return (
                <SkeletonItem key={i}/>
            );
        })}
    </>
}