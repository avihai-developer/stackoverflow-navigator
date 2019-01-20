import {Content, ContentTypes} from '../../../content/content';
import {Question} from '../../state/questions/question';

export function questionToContent(question: Question): Content[] {
    if (question) {
        return [
            {
                title: 'View Count:',
                value: question.viewCount.toString(),
            },
            {
                title: 'Score:',
                value: question.score.toString()
            },
            {
                title: 'Link:',
                value: question.link,
                type: ContentTypes.LINK
            }
        ];
    } else {
        return [];
    }
}
