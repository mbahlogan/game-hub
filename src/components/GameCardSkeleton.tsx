import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Card width={'250px'} borderRadius={15} overflow={'hidden'}>
            <Skeleton height={'250px'}/>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}

export default GameCardSkeleton;