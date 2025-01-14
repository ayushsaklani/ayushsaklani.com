export type imageAttributes = {
  mime:string;
  url:string;
  name:string;
  width:number;
  height:number;
  placeholder:string;
}

export type UrlProps={
  id:number,
  url:string,
  name:string
}

 export type ImageHoverProps = {
    src: string;
    srcSmall: string;
    alt: string;
  };

  export type MediaComponentProps = {
    type: string;
    src: string;
    alt: string;
    width:number;
    height:number;
  };

export type CloudinaryProviderMetadata ={
    public_id:string;
    resource_type: string
  }
  

