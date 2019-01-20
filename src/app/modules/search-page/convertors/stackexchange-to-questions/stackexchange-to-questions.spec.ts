import {stackexchangeToQuestions} from './stackexchange-to-questions';
import {StackexchangeMock} from './stackexchange-mock';
import {Question} from '../../state/questions/question';

describe('stackexchange-to-questions convertor', () => {

    it('should convert stackexchangeResponse to Question[]', () => {
        const data: Question[] = stackexchangeToQuestions(StackexchangeMock);
        expect(data[0].link).toEqual('https://stackoverflow.com/a/36325468');
        expect(data[0].score).toEqual(185);
        expect(data[0].title).toEqual('Angular dynamic tabs with user-click chosen components');
        expect(data[0].viewCount).toEqual(104509);
    });

    it('should convert undefined to Question[]', () => {
        const data: Question[] = stackexchangeToQuestions(undefined);
        const emptyQuestionArray: Question[] = [];
        expect(data).toEqual(emptyQuestionArray);
    });

});
