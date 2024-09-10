export type imageAttributes = {
  mime:string;
  url:string;
  name:string;
}

export type imageListType = {
    attributes:imageAttributes;
  };



  export type ImageHoverProps = {
    src: string;
    srcSmall: string;
    alt: string;
  };

  export type MediaComponentProps = {
    type: string;
    src: string;
    alt: string;
  };

  export type URLList = {
    name:string,
    url:string,
  }

  export type ProjectProps={
    id:number,
    name:string,
    tags:Array<string>,
    media:string,
    type:string,
    date: string,
    url:Array<URLList>,
    description:string,

  };