
export class Story{
  private _storyTitle:string
  private _storyDescription:string
  private _storyThumbnail:string
  private _storyGenre:string
  private _storyVisibility:string
  private _storyParagraph:String[]

  constructor() {
    this._storyTitle = "";
    this._storyDescription = "";
    this._storyThumbnail = "";
    this._storyGenre = "";
    this._storyVisibility = "";
    this._storyParagraph = []
  }


  get storyParagraph(): String[] {
    return this._storyParagraph;
  }

  set storyParagraph(value: String[]) {
    this._storyParagraph = value;
  }

  get storyTitle(): string {
    return this._storyTitle;
  }

  set storyTitle(value: string) {
    this._storyTitle = value;
  }

  get storyDescription(): string {
    return this._storyDescription;
  }

  set storyDescription(value: string) {
    this._storyDescription = value;
  }

  get storyThumbnail(): string {
    return this._storyThumbnail;
  }

  set storyThumbnail(value: string) {
    this._storyThumbnail = value;
  }

  get storyGenre(): string {
    return this._storyGenre;
  }

  set storyGenre(value: string) {
    this._storyGenre = value;
  }

  get storyVisibility(): string {
    return this._storyVisibility;
  }

  set storyVisibility(value: string) {
    this._storyVisibility = value;
  }
}
