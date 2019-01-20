import {Question} from '../../state/questions/question';

export function questionsToArray(questions: Question[]): string[] {
    const array: string[] = [];
    if (questions && questions.length) {
        for (let i = 0; i < questions.length; i++) {
            array.push(questions[i].title);
        }
    }
    return array;
}
