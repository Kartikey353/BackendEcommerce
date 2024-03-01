import { Question } from './entities/question.entity';
import { GetQuestionDto } from './dto/get-questions.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
export declare class MyQuestionsService {
    private myQuestion;
    findMyQuestions({ limit, page, search, answer }: GetQuestionDto): {
        count: number;
        current_page: number;
        firstItem: number;
        lastItem: number;
        last_page: number;
        per_page: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: Question[];
    };
    findMyQuestion(id: number): Question;
    create(createQuestionDto: CreateQuestionDto): Question;
    update(id: number, updateQuestionDto: UpdateQuestionDto): Question;
    delete(id: number): Question;
}
