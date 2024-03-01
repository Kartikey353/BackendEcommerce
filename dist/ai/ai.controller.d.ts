import { AiService } from './ai.service';
import { CreateAiDto } from './dto/create-ai.dto';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    create(createAiDto: CreateAiDto): import("./entities/ai.entity").Ai;
}
