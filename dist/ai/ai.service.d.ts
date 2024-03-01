import { CreateAiDto } from './dto/create-ai.dto';
import { Ai } from './entities/ai.entity';
export declare class AiService {
    create(createAiDto: CreateAiDto): Ai;
}
