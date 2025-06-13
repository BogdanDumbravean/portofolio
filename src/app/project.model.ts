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
    maxWidth?: string;
    maxHeight?: string;
    
    constructor(path:string, isVideo:boolean = false, maxWidth?: string, maxHeight?: string) {
        this.isVideo = isVideo;
        this.path = path;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }
}

export class Text {
    isLink:boolean = false;
    text:string;
    isRichText:boolean = false;
    richContent?: RichTextSegment[];
    
    constructor(text:string, isLink:boolean = false, richContent?: RichTextSegment[]) {
        this.isLink = isLink;
        this.text = text;
        if (richContent) {
            this.isRichText = true;
            this.richContent = richContent;
        }
    }
}

export interface RichTextSegment {
    text: string;
    isLink?: boolean;
    url?: string;
    isNewline?: boolean;
}