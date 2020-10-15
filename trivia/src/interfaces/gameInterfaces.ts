export interface Question {
    question: string;
    options: string[];
    answer: string;
    worth: number;
}

export interface Category {
    category: string;
    questions: Question[];
}

export interface RootInput {
    questionsList: Category[];
}

export interface Player{
    name: string;
    score: number;
}