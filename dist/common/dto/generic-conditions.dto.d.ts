export declare class WhereHasConditions {
    operator: SQLOperator;
    value: string;
}
export declare class WhereHasConditionsRelation {
    relation: string;
    operator: SQLOperator;
    amount: number;
}
export declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}
export declare enum SQLOperator {
    EQ = "EQ",
    NEQ = "NEQ",
    GT = "GT"
}
