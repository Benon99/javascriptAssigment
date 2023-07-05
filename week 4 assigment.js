var names= new Array();
    names[0]="sako";
    names[1]="yaakov";
    names[2]="jone";
    names[3]="james";
    names[4]="Jacklin";
    names[5]="jack";
    names[6]="James";
    names[7]="ibrahim";
    names[8]="kaven";
    names[9]="paola";

for(var i=0; i< names.length ; ++i){
    if(names[i].charAt(0)==="J"||names[i].charAt(0)==="j"){
        console.log("goodbye "+names[i] );
    }
    else{
        console.log("hello " + names[i])
    }
}
