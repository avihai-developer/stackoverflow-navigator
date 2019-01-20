export enum SearchStages {
    Idle = 'Idle',
    InProgress = 'InProgress',
    Success = 'Success',
    NoResults = 'NoResults',
    Error = 'Error'
}

export interface Search {
    keywords: string;
    stage: SearchStages;
}
