export const API_KEY='AIzaSyBnqvsZV0O4VGplTfW6H29fGDDjZue8tEo'

export const view_converter=(val)=>{
    if(val>=1000000)
      return Math.floor(val/1000000)+"M";
    else if(val>=1000)
      return Math.floor(val/1000)+"K";
    return val;
}
