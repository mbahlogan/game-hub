import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/image-url";

interface Props {
    game: Game
}

function GameCard({game}:Props) {
    return (
        <Card borderRadius={15} overflow={'hidden'}>
            <Image src={getCroppedUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platform={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;