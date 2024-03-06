import { Question } from '../entities/question.entity';
declare const CreateQuestionDto_base: import("@nestjs/common").Type<Omit<Question, "user" | "created_at" | "updated_at" | "id" | "product">>;
export declare class CreateQuestionDto extends CreateQuestionDto_base {
}
export {};
