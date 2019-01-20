import {Question} from '../../state/questions/question';

export function stackexchangeToQuestions(stackexchangeResponse: any): Question[] {
    const questions: Question[] = [];
    if (stackexchangeResponse && stackexchangeResponse.items && stackexchangeResponse.items.length) {
        for (let i = 0; i < stackexchangeResponse.items.length; i++) {
            questions.push({
                title: stackexchangeResponse.items[i].title,
                score: stackexchangeResponse.items[i].score,
                viewCount: stackexchangeResponse.items[i].view_count,
                link: 'https://stackoverflow.com/a/' + stackexchangeResponse.items[i].accepted_answer_id
            });
        }
    }
    return questions;
}
