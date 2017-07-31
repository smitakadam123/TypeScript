export interface sampleOne{
watt: number
getShow();

}

export class Sample implements sampleOne{
watt=40;
getShow()
{
    console.log("Watt is :" +this.watt);
}

}

let obj :Sample=new Sample();
obj.getShow();

