import {questionToContent} from './question-to-content';
import {QuestionMock} from './question-mock';
import {Content, ContentTypes} from '../../../content/content';

describe('question-to-content convertor', () => {

    it('should convert question to Content[]', () => {
        const data: Content[] = questionToContent(QuestionMock);
        expect(data[0].title).toEqual('View Count:');
        expect(data[0].value).toEqual('104509');
        expect(data[1].title).toEqual('Score:');
        expect(data[1].value).toEqual('185');
        expect(data[2].title).toEqual('Link:');
        expect(data[2].value).toEqual('https://stackoverflow.com/a/36325468');
        expect(data[2].type).toEqual(ContentTypes.LINK);
    });

    it('should convert undefined to Content[]', () => {
        const data: Content[] = questionToContent(undefined);
        const emptyQuestionArray: Content[] = [];
        expect(data).toEqual(emptyQuestionArray);
    });

});
