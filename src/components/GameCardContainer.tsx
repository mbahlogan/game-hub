import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";


interface Props{
    children: ReactNode;
}

function GameCardContainer({children}: Props) {
    return (
        <Box width={'100%'} borderRadius={15} overflow={'hidden'}>
            {children}
        </Box>
    );
}

export default GameCardContainer;