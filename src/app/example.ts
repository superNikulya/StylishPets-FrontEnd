import {first, map, of, pipe} from "rxjs";


of(["carrot", "carrot1", "carrot2"],  ["carrot", "carrot1", "carrot2"], ["carrot", "carrot1", "carrot2"])
  .pipe(map((val)=> {
    if(val[0] ==='carrot1') {
      return val[0]
    }
    else{
      return val[1]
  }
  })).subscribe(value => console.log(value))

