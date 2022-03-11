type MyArrayType = ImgPath | Text ;

export class Project {
    title:string;
    profile:string;
    summary:string;
    content:MyArrayType[];
    constructor(title:string, profile:string, summary:string, content:MyArrayType[]) {
        this.title = title;
        this.profile = profile;
        this.summary = summary;
        this.content = content;
    }
}

export class ImgPath {
    path:string;
    constructor(path:string) {
        this.path = path;
    }
}

export class Text {
    text:string;
    constructor(text:string) {
        this.text = text;
    }
}