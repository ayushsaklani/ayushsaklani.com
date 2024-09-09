export type imageAttributes = {
  mime:string;
  url:string;
  name:string;
}

export type imageListType = {
    attributes:imageAttributes;
  };

  export type ProjectType = {
    attributes: {
      name: string;
      cover: {
        data: {
          attributes: {
            url: string;
            mime: string;
          };
        };
      };
    };
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