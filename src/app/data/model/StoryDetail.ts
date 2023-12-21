export type StoryDetail = {
    id?:           number;
    userID?:       number;
    title?:        string;
    desc?:         string;
    thumbnail?:    string;
    genre?:        string;
    visibility?:   number;
    createdAt?:    Date;
    updatedAt?:    Date;
    cerbungStory?: CerbungStory[];
}

export type CerbungStory = {
    id?:        number;
    cerbungID?: number;
    userID?:    number;
    desc?:      string;
    createdAt?: Date;
    updatedAt?: Date;
}
