export function Msg(){
    return(
      <div className="welcome">
         <h1>Hello,🙄😣🥱😯</h1>
      </div>
    )
  }
  //1.named imports and exports -latest
  export const double =(n)=>n*2;
  //2.default import and eports -old
  //only one eported per file
  //export {Msg, double}//end of the file -it is a best practice 