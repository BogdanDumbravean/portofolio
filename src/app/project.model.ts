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
    isVideo:boolean = false;
    path:string;
    constructor(path:string, isVideo:boolean = false) {
        this.isVideo = isVideo;
        this.path = path;
    }
}

export class Text {
    isLink:boolean = false;
    text:string;
    constructor(text:string, isLink:boolean = false) {
        this.isLink = isLink;
        this.text = text;
    }
}