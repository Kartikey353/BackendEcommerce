import { Question } from '../entities/question.entity';
declare const CreateQuestionDto_base: import("@nestjs/common").Type<Omit<Question, "created_at" | "updated_at" | "id" | "product" | "user">>;
export declare class CreateQuestionDto extends CreateQuestionDto_base {
}
export {};
